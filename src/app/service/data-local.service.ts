import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { Article } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article []= [];

  constructor(private nativeStorage: NativeStorage) {
  
   }

  guardarNoticias(noticia: Article){
  
  const existe = this.noticias.find(noti => noti.title === noticia.title );
  if (!existe ) {
    this.noticias.unshift( noticia );
    this.nativeStorage.setItem('favoritos',this.noticias);
  
  }
   


  }
  async cargarFavoritos(){
    const favoritos= await this.nativeStorage.getItem('favoritos');
    if (favoritos){
      this.noticias = favoritos;

    }
   
  }
}
