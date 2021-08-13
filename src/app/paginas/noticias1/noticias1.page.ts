import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';

@Component({
  selector: 'app-noticias1',
  templateUrl: './noticias1.page.html',
  styleUrls: ['./noticias1.page.scss'],
})
export class Noticias1Page implements OnInit {
noticias: Article[] = [];

  constructor(private noiciaSerice:RecordatoriosService) { }

  ngOnInit() {

  this.cargarNoticias();
  }
  loasData(event){
    //console.log(event);
   this.cargarNoticias(event);

  }
  cargarNoticias( event?){
    this.noiciaSerice.getTopHeadlines().subscribe(resp =>{
     // console.log('noticias', resp);
      this.noticias.push(...resp.articles);
      if(event){
        event.target.complete();
      }
    });
  }

}
