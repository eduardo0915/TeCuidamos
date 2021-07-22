import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';
import moment from 'moment';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage{
 
  fechaCita: Date = new Date();

  constructor()
   { 
    moment.locale('es');
   
   }
   ngOnInit(){}
    cambioFecha( event ){
      console.log('ionChange', event );
      console.log('Date', new Date (event.detail.value ));
    }
   }

