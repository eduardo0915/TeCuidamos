import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/service/data-local.service';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:Article;
  @Input() indice:number;
   
    constructor(private iab:InAppBrowser,
                private SocialSharing:SocialSharing,
                private datalocalService:DataLocalService,
                private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  abrirNoticia(){
    //console.log('Noticia',this.noticia.url);
    const browser = this.iab.create(this.noticia.url,'_system');

  }
  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.SocialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
          console.log('Favorito');
          this.datalocalService.guardarNoticias(this.noticia);
        }
      },
        {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}