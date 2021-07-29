import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agregar } from '../paginas/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {

  constructor( public database: AngularFirestore) { }
  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
}

getDoc<tipo>(path: string, id: string) {
  const collection = this.database.collection<Agregar>(path);
  return collection.doc().valueChanges();
}
getId() {
  return this.database.createId();
}


}


