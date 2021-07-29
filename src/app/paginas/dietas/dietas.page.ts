import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.page.html',
  styleUrls: ['./dietas.page.scss'],
})
export class DietasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSearchChange(event){
    console.log(event);

  }
}
