import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../user.interface';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
import { FirestorageService } from 'src/app/firestorage.service';

@Component({
  selector: 'app-informacion-basica',
  templateUrl: './informacion-basica.page.html',
  styleUrls: ['./informacion-basica.page.scss'],
})
export class InformacionBasicaPage implements OnInit {

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
  actualizarEnable = false;

  constructor(public menucontroler: MenuController,
    private authSvc: AuthService, private router: Router,
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

    const uid = await this.authSvc.getUid();
    console.log(uid);
  }

  openMenu(){
    console.log('Open menu');
this.menucontroler.toggle("main-menu");
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

getUserInfo(uid: string) {
  console.log('getUserInfo');
  const path = 'Usuarios';
  this.suscriberUserInfo = this.firestoreService.getDoc<Usuario>(path, uid).subscribe( res => {
         if (res !== undefined) {
           this.usuario = res;
         }
  });
}

async ActualizarUsuario(){  
  try{

const uid = await this.authSvc.getUid();
this.usuario.uid = uid;
this.guardarUser();
console.log(uid);

  }
catch(error){
console.log("ERROR",error);
}
}

async guardarUser() {
  const path = 'Usuarios';
  const name = this.usuario.Nombre;

  if (this.newFile !== undefined) {
    const res = await this.firestorageService.uploadImage(this.newFile, path, name);
    this.usuario.foto = res;
    console.log(this.usuario.foto); 
  }
this.firestoreService.updateDoc(this.usuario, path, this.usuario.uid).then( res => {
      console.log('actualizado con exito');
  }).catch( error => {
  });
}

async newImageUpload(event: any) {
  if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
          this.usuario.foto = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
 }

}
