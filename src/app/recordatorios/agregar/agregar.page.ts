import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';
import moment from 'moment';
import { Agregar, Usuario } from 'src/app/paginas/user.interface';
import { Subscription } from 'rxjs';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/firestore.service';
import { FirestorageService } from 'src/app/firestorage.service';
import { RecordatoriosPage } from 'src/app/paginas/recordatorios/recordatorios.page';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage  implements OnInit{

  Agregar: Agregar = {
    id: "",
    fecha: "",
    hora: "",
    descripcion: "",
  }
  agregar: Agregar[] = [];
  newFile: any;
  uid = '';
  suscriberUserInfo: Subscription;
  actualizarEnable = false;
  
  fechaCita: Date = new Date();

  constructor(public RecordatorioService: RecordatoriosService,
  public menucontroler: MenuController,
  private authSvc: AuthService, private router: Router,
  public firestoreService: FirestoreService,
  public firestorageService: FirestorageService,
  public loadingController: LoadingController,
  public toastController: ToastController,
  public alertController: AlertController,)
  
  
  
   { 
    moment.locale('es');
   
   
   }
  async ngOnInit(){
    const uid = await this.authSvc.getUid();
    console.log(uid);}
    cambioFecha( event )
    {

      console.log('ionChange', event );
      console.log('Date', new Date (event.detail.value ));
      

    }
    openMenu(){
      console.log('Open menu');
  this.menucontroler.toggle("main-menu");
    }
  

    async guardar() {

      const nombre = 'Recordatorios/';
      const uid = await this.RecordatorioService.getId(); 
      this.Agregar.id = uid;
	  const path = 'Usuarios/' + this.uid + '/' + nombre;
    
      
      this.RecordatorioService.createDoc(this.agregar, path, uid).then( res => {
          console.log('Agregado con exito');
      }).catch( error => {
      });
      }
        //borrar enfermedad
        
        async deleteRecordatorios(recor) {
        const uid = await this.authSvc.getUid();
        const nombre = 'Recordatorios/';
        const path = 'Agregar/' + uid + '/' + nombre; 
        const alert = await this.alertController.create({
          cssClass: 'normal',
          header: 'Advertencia',
          message: ' Seguro desea <strong>eliminar Recordatorios</strong> esta discapacidad',
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
                this.firestoreService.deleteDoc(path,recor.id ).then( res => {
                  this.presentToast('Recordatorio Eliminado con exito');
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
        
        }
        

