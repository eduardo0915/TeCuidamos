import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }


  ngOnInit() {
  }
  
 async onRegister(email, password){
     try{
const user = await this.authSvc.register(email.value, password.value);
if (user){
  //Chequear si correo esta registrado
  const isVerified = this.authSvc.isEmailVerified(user);
  this.redirectUser(isVerified);
  
}
     }
catch(error){
  console.log("ERROR",error);
}
  }

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
