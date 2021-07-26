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
  uid(path: string, uid: any) {
    throw new Error('Method not implemented.');
  }
  
   mensajes: OSNotificationPayload []=[];

  constructor(private db:AngularFireDatabase, 
    public pushService:PushService,) { }

   ngOnInit(){

   }
  }
  
  

