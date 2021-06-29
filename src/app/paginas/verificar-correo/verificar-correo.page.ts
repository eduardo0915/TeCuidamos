import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from '../user.interface';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.page.html',
  styleUrls: ['./verificar-correo.page.scss'],
})
export class VerificarCorreoPage  {

  user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  async onSendEmail(): Promise<void> {
    try {
      await this.authSvc.sendVerifcationEmail();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
