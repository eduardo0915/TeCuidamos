import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'url';
import { Agregar } from '../paginas/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {

  constructor( public database: AngularFirestore, private http:HttpClient) { }
 getTopHeadlines(){
   return this.http.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=c5edf732f05d4531a500a4366f83964e`);
 }

}


