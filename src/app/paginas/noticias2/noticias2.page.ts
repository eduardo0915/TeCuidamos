import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';

@Component({
  selector: 'app-noticias2',
  templateUrl: './noticias2.page.html',
  styleUrls: ['./noticias2.page.scss'],
})
export class Noticias2Page implements OnInit{

 @ViewChild(IonSegment) segmentos: IonSegment;
  categorias = ['business', 'entertainment', 'general', 'health',
   'science', 'sport', 'technologia',];
   noticias: Article [] = [];



  
  constructor ( private noiciaSerice:RecordatoriosService) { }

  ngOnInit() {
    //this.segmentos.value = this.categorias[0];
    this.cargarNoticias(this.categorias[0]);
   
  }
  cambioCategoria(event){
    this.noticias= [];
    this.cargarNoticias(event.detail.value);

  }
  cargarNoticias( categoria: string){
    this.noiciaSerice.getTopHeadlineCategoria( categoria )
    .subscribe(resp =>{
     // console.log(resp);
      this.noticias.push(...resp.articles)
      
    });

  }
  loasData(event){
     this.cargarNoticias(this.segmentos.value);
  }

}
