import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../user.interface';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
import { FirestorageService } from 'src/app/firestorage.service';
import { PushService } from 'src/app/service/push.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  

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

  constructor(public  menucontroler: MenuController,
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


}
