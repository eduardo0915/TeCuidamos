import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/service/data-local.service';

@Component({
  selector: 'app-indexnoticias',
  templateUrl: './indexnoticias.page.html',
  styleUrls: ['./indexnoticias.page.scss'],
})
export class IndexnoticiasPage implements OnInit {

  constructor(public datalocalService:DataLocalService) { }
   
  ngOnInit() {
  }

}
