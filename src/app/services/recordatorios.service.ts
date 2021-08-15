import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';




import { Agregar } from '../paginas/user.interface';

const apiKey2 = environment.apiKey2;
 
const headers = new HttpHeaders({
  'X-Api-key': apiKey2
 
});

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {
  headlinePage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor( private http:HttpClient) { }
 private ejecutarQuery( query: string){

 }
 
 
  getTopHeadlines(){
   this.headlinePage++;
   return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/everything?q=keyword&apiKey=c5edf732f05d4531a500a4366f83964e`);

  

 }
 getTopHeadlineCategoria( categorias: string){

  if(this.categoriaActual=== categorias){
    this.categoriaPage++;

  }else{
    this.categoriaPage = 1;
    this.categoriaActual = categorias;

  }
  return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5edf732f05d4531a500a4366f83964e');

 }

}


