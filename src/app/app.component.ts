import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { PushService } from './service/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private authSvc: AuthService, 
    private router: Router,
    public menucontroler: MenuController,
    private pushService: PushService) {}

  suscriberUserInfo: Subscription;
//configuracion push 
  initializeApp(){


  }

  async salir() {
    this.authSvc.logout();
    this.suscriberUserInfo.unsubscribe();
    //prueba se puede borrar esa linea
    //const uid = await this.authSvc.getUid();
    //console.log(uid);
 }

 MenuCloset() {
  this.menucontroler.enable(false, 'main-menu');
 
}
}
