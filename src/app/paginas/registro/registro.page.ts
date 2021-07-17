import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../user.interface';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
import { FirestorageService } from 'src/app/firestorage.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    uid: "",
    Nombre: "",
    foto: "",
    edad: "",
    sexo: "",
  };

  newFile: any;
  uid = '';
  suscriberUserInfo: Subscription;
  ingresarEnable = false;

  constructor(private authSvc: AuthService, private router: Router,
    public firestoreService: FirestoreService,
    public firestorageService: FirestorageService) {

      
     
      this.authSvc.stateAuth().subscribe( res => {
        console.log(res.uid);
        if (res !== null) {
          this.uid = res.uid;
          this.getUserInfo(this.uid);
        } else {
          this.initCliente();
      }
    
});
     }


  async ngOnInit() {
    //temporal para prueba se puede borrar
    const uid = await this.authSvc.getUid();
    console.log(uid);
    
  }

  initCliente() {
    this.uid = '';
    this.usuario = {
      uid: '',
      Nombre: '',
      foto: '',
      edad: '',
      sexo: '',
    };
    console.log(this.usuario);
}

 
  
 async onRegister(email, password){
     try{
const user = await this.authSvc.register(email.value, password.value);
const uid = await this.authSvc.getUid();
this.usuario.uid = uid;
this.guardarUser();
console.log(uid);
if (user){
  //Chequear si correo esta registrado
  const isVerified = this.authSvc.isEmailVerified(user);
  this.redirectUser(isVerified);
  
}
     }
catch(error){
  console.log("ERROR",error);
}
  }

  private redirectUser(isVerified: boolean){
       
    //enviar a pagina de admin si esta verificado o la pagina de inicio que se defina
     if (isVerified){
       this.router.navigate(["home"]);
     }
     else {
       //enviar a pagina de verificacion si no esta verificado
       this.router.navigate(["verificar-correo"]);
     }
   }

   async guardarUser() {
    const path = 'Usuarios';
    const name = this.usuario.Nombre;

   /* if (this.newFile !== undefined) {
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.usuario.foto = res;
    }*/
    this.firestoreService.createDoc(this.usuario, path, this.usuario.uid).then( res => {
        console.log('guardado con exito');
    }).catch( error => {
    });
  }

   async salir() {
    this.authSvc.logout();
    this.suscriberUserInfo.unsubscribe();
    //prueba se puede borrar esa linea
    //const uid = await this.authSvc.getUid();
    //console.log(uid);
 }

 getUserInfo(uid: string) {
  console.log('getUserInfo');
  const path = 'Usuarios';
  this.suscriberUserInfo = this.firestoreService.getDoc<Usuario>(path, uid).subscribe( res => {
         if (res !== undefined) {
           this.usuario = res;
         }
  });
}

getUserInfoNombre(uid: string) {
  console.log('getUserInfoNombre');
  const path = 'Usuarios';
  this.suscriberUserInfo = this.firestoreService.getDoc<Usuario>(path, uid).subscribe( res => {
         if (res !== undefined) {
           this.usuario.Nombre = res.Nombre;
         }
  });
}

}
