import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {
  recid:string
  constructor(private http:HttpClient) { }
  setrecid(_recid:string){
   this.recid= _recid
  
}
getRecid(){
  return this.recid
}
}