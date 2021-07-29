import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'url';
import { Agregar } from '../paginas/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {

  constructor( public database: AngularFirestore) { }
  createDoc(data: any, path: string, id: string) {
    const res = this.database.collection(path);
    return res.doc(id).set(data);
}

getDoc<tipo>(path: string, id: string) {
  const res = this.database.collection<Agregar>(path);
  return res.doc().valueChanges();
}
getId() {
  return this.database.createId();
}


}


