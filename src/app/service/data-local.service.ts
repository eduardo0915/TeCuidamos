import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article []= [];

  constructor(private nativeStorage: NativeStorage,
               public toastController: ToastController) {
   this.cargarFavoritos();
   }

   async presentToastl(message: string){
     const toast = await this.toastController.create({
       message,
       duration: 1500
     });
     toast.present();
   }

  guardarNoticias(noticia: Article){
  
  const existe = this.noticias.find(noti => noti.title === noticia.title );
  if (!existe ) {
    this.noticias.unshift( noticia );
    this.nativeStorage.setItem('favoritos',this.noticias);
  
  }
   this.presentToastl('Agregado a Favoritos');

  }
  async cargarFavoritos(){
    const favoritos= await this.nativeStorage.getItem('favoritos');
    if (favoritos){
      this.noticias = favoritos;

    }
   
  }
  borrarNoticia( noticia: Article ){
     this.noticias = this.noticias.filter( noti => noti.title !== noticia.title);
     this.nativeStorage.setItem('favoritos',this.noticias);
     this.presentToastl('Barrado de Favoritos');
      
  }

}
