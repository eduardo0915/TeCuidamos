import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Action } from 'rxjs/internal/scheduler/Action';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage {
  
itemRef: any;
contacts=[];
  

  constructor(private db:AngularFireDatabase ) { }

   ngOnInit(){
    this.itemRef=this.db.object('Recordatorio');
      this.itemRef.snapshotChanges().subscribe(action => {

        console.log(action.payload.val)
      });

    }
  

}
