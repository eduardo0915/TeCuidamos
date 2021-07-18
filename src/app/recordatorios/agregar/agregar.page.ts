import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage{
 
  recid: string;
  descripcion: string=''
  fecha_hora:Date;
  constructor(private db: AngularFireDatabase, private user:RecordatoriosService)
   { 
  

    
 

   }
}
