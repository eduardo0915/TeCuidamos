import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage  {

  constructor(private authSvc: AuthService, private router: Router) { }

 
  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
