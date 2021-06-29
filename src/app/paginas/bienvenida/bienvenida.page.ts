import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit() {
  }

  async onloginGoogle(){
    try{
      const user = await this.authSvc.loginGoogle();
      if (user){
        //cheaquer correo
        const isVerified =  this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
        }
      
        catch(error){
          console.log("ERROR",error)
        }
      }
      //Redirrecionar usuario
  
     private redirectUser(isVerified: boolean){
       
       //enviar a pagina de admin si esta verificado o la pagina de inicio que se defina
        if (isVerified){
          this.router.navigate(["home"]);
        }
        else {
          //enviar a pagina de verificacion si no esta verificado
          this.router.navigate(["verificar-correo"]);
        }
      }

}
