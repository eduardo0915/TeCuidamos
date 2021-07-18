import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  constructor(private authSvc: AuthService,private router: Router,
    private menu: MenuController) { 

      
    }

  ngOnInit() {
   
  }
  
  

  async onLogin(email, password){
    try{
  const user = await this.authSvc.login(email.value, password.value);
  if (user){
    //cheaquer correo
    const isVerified =  this.authSvc.isEmailVerified(user);
    //si no esta verificado lo manda a la pagina de verificacion
      this.redirectUser(isVerified);
  }
    }
  
    catch(error){
      console.log("ERROR",error)
    }
  }
  //boton de google
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

      MenuCloset() {
        this.menu.enable(true, 'main-menu');
       
      }
  }
  
  

