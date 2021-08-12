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
   this.http.get(`HttpClientModule`);
 }

}


