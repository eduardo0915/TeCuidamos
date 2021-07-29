import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Enfermedades, Usuario } from '../user.interface';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
import { FirestorageService } from 'src/app/firestorage.service';
import { Discapacidades } from '../user.interface';


@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.page.html',
  styleUrls: ['./enfermedades.page.scss'],
})
export class EnfermedadesPage implements OnInit {

 //IMPORTAR TABLAS DE USER.INTERFACE
 usuario: Usuario = {
  uid: "",
  Nombre: "",
  foto: "",
  edad: "",
  sexo: "",
};

enfermedades: Enfermedades = {
  id: "",
  nombre: "",
  tratamiento: "",
};


enfermedade: Enfermedades[] = [];
newFile: any;
uid = '';
suscriberUserInfo: Subscription;
actualizarEnable = false;



constructor(public menucontroler: MenuController,
  private authSvc: AuthService, private router: Router,
  public firestoreService: FirestoreService,
  public firestorageService: FirestorageService, 
  public loadingController: LoadingController,
  public toastController: ToastController,
  public alertController: AlertController,) { 

    this.authSvc.stateAuth().subscribe( res => {
      console.log(res.uid);
      if (res !== null) {
        this.uid = res.uid;
        this.getUserInfo(this.uid);
      } else {
        this.initCliente();
    }

    this.loadDiscapacidades();
  
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

//metodo para guardar la enfermedad
async guardarUser() {
const nombre = 'enfermedades/';
const id = await this.firestoreService.getId(); //se usa para obtener un id aleatorio de firebase
this.enfermedades.id = id;
const path = 'Usuarios/' + this.uid + '/' + nombre; //esta es la direccion donde se va a crear la colecion en firebase

this.firestoreService.createDoc(this.enfermedades, path, id).then( res => {
    console.log('Agregado con exito');
}).catch( error => {
});
}

//cargar informacion de enfermedad

async loadDiscapacidades() {
const uid = await this.authSvc.getUid();
const nombre = 'enfermedades/';
const path = 'Usuarios/' + uid + '/' + nombre; 
this.firestoreService.getCollection<Discapacidades>(path).subscribe( res => {
       console.log(res);
      this.enfermedade = res;
      console.log(this.enfermedade);
});
}

//borrar enfermedad

async deleteDiscapacidad(disca: Discapacidades) {
const uid = await this.authSvc.getUid();
const nombre = 'enfermedades/';
const path = 'Usuarios/' + uid + '/' + nombre; 
const alert = await this.alertController.create({
  cssClass: 'normal',
  header: 'Advertencia',
  message: ' Seguro desea <strong>eliminar</strong> esta discapacidad',
  buttons: [
    {
      text: 'cancelar',
      role: 'cancel',
      cssClass: 'normal',
      handler: (blah) => {
        console.log('Confirm Cancel: blah');
        // this.alertController.dismiss();
      }
    }, {
      text: 'Ok',
      handler: () => {
        console.log('Confirm Okay');
        this.firestoreService.deleteDoc(path,disca.id ).then( res => {
          this.presentToast('eliminado con exito');
          this.alertController.dismiss();
        }).catch( error => {
            this.presentToast('no se pude eliminar');
        });
      }
    }
  ]
});
await alert.present();
}

async presentToast(msg: string) {
const toast = await this.toastController.create({
  message: msg,
  cssClass: 'normal',
  duration: 2000,
  color: 'light',
});
toast.present();
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
