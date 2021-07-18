import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User, Usuario } from './paginas/user.interface';
import { FirestoreService } from 'src/app/firestore.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

 datosUsuario: Usuario;

  public user$: Observable<User>;

  constructor(public afAuth:AngularFireAuth, public afs: AngularFirestore,
    private firestoreService: FirestoreService
    ) 
    { 
    this.stateUser();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user)  => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
          
        }
          return of(null);
      })
    );
   }

   stateUser() {
    this.stateAuth().subscribe( res => {
      // console.log(res);
      if (res !== null) {
         this.getInfoUser();

      }  
    }  );
  }



  
  async resetPassword(email: string): Promise<void> { 
    try {
      
      return this.afAuth.sendPasswordResetEmail(email);
     }
       catch (error){
         console.log("Error",error());
         
       }
  }
  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      //this.updateUserData(user); 
      return user;
     }
       catch (error){
         console.log("Error",error());
         
       }
  }
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      await this.sendVerificationEmail();
      return user;
     }
       catch (error){
         console.log("Error",error());
         
       }
  }
  async login(email: string, password: string): Promise<User> {
    try {
     const { user } = await this.afAuth.signInWithEmailAndPassword(email, password); 
     this.updateUserData(user);
     return user;
    }
      catch (error){
        console.log("Error",error());
        
      }
  }

  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async sendVerificationEmail(): Promise<void> {
    try {
      
      return (await this.afAuth.currentUser).sendEmailVerification();
     }
       catch (error){
         console.log("Error",error());
         
       }
  }

  isEmailVerified(user: User): boolean  {
       
      return user.emailVerified == true ? true : false;
       
  }
  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut(); 
    }
      catch (error){
        console.log("Error",error());
        
      }
       
  }

  
  private updateUserData(user:User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/${user.uid}');
  const data: User = {
uid: user.uid,
email: user.email,
emailVerified: user.emailVerified,
displayName: user.displayName,
  }  ;
  return userRef.set(data, {merge: true});
}

//Nuevo login y registro

async getUid() {
  const user = await this.afAuth.currentUser;
  if (user === null) {
    return null;
  } else {
     return user.uid;
  }
}

stateAuth() {
  return this.afAuth.authState;
}

async getInfoUser() {
  const uid = await this.getUid();
  const path = 'Usuarios';  
  this.firestoreService.getDoc<Usuario>(path, uid).subscribe( res => {
        if (res !== undefined) {
              this.datosUsuario = res;
              // console.log('datosCliente ->' , this.datosCliente);
        }
  });
}
 

}
