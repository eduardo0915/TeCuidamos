import { ApplicationRef, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Action } from 'rxjs/internal/scheduler/Action';
import { PushService } from 'src/app/service/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit  {
  
   mensajes: OSNotificationPayload []=[];

  constructor(private db:AngularFireDatabase, 
    public pushService:PushService, private applicatioRef:ApplicationRef ) { }

   ngOnInit(){

    this.pushService.pushListener.subscribe( noti => {
    this.mensajes.unshift(noti);
    this.applicatioRef.tick();
   });
  
   }

  async ionViewWillEnter(){

    console.log('Will Enter - Cargar mensajes');
    this.mensajes = await this.pushService.getMensajes();

   }
}
