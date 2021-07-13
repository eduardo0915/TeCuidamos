import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public menucontroler: MenuController) { }

  ngOnInit() {
  }
   openMenu(){
    console.log('Open menu');
this.menucontroler.toggle("main-menu");
  }
}
