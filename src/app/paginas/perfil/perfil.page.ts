import { Component, OnInit } from '@angular/core';
import { Perfil } from '../user.interface';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  Perfil: Perfil = {
    uid: "",
    Nombre: "",
    foto: "",
    sexo: "",
  }
  constructor() { }

  ngOnInit() {
  }

}
