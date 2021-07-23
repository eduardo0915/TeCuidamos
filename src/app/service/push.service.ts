import { Injectable } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {EventEmitter } from '@angular/core';

@Injectable({
  
  providedIn: 'root'
})

export class PushService {
mensajes: OSNotificationPayload []=[
 // {mensajes de la push... 
   // title: 'Titulo de la push ',
  //  body: 'Este es el body de la push ',
   // date: new Date()
 // }

 
];
  userId:string;  

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,
     private  NativeStorage: NativeStorage) { 
    this.cargarmensajes();
  }
  async getMensajes(){
     await this.cargarmensajes();
     return [...this.mensajes];
   }
    configuracionInicial(){
      this.oneSignal.startInit('ea9b9e33-c5d0-4064-84ff-13183c93819c', '356218024781');      
     
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('Notificacion recibida',noti)
      this.notificacionRecibida(noti);
      });

      this.oneSignal.handleNotificationOpened().subscribe( async(noti) => {
        // do something when a notification is opened
        console.log('Notificacion abierta',noti)
        await this.notificacionRecibida(noti.notification)
      });
      this.oneSignal.getIds().then(info=>{
        this.userId = info.userId;

      });

      this.oneSignal.endInit();
      console.log(this.userId);
          }
       async notificacionRecibida( noti: OSNotification){
            await this.cargarmensajes();
  
            const payload = noti.payload;
            
            const existePusch = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID);

            if (existePusch){
              return;

      }
            this.mensajes.unshift( payload );
            this.pushListener.emit (payload);
           await this.guardarmensaje();
          
          }
          guardarmensaje(){
            this.NativeStorage.setItem('mensajes', this.mensajes);

          }
        async cargarmensajes(){

          await this.NativeStorage.getItem('mensajes') || [];
          return this.mensajes;

          }

        }

