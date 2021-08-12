import { Component, OnInit } from '@angular/core';
import { duration } from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-indexgym',
  templateUrl: './indexgym.page.html',
  styleUrls: ['./indexgym.page.scss'],
  
})
export class IndexgymPage {
 
 data:any[]=[];
 data2:any[]=[];
 data3:any[]=[];
  segmentChanged( ev: any ) {
    console.log('Segment changed', ev,);
    
  }
  onSelectChanged(e){
    console.log(e);
  }

  constructor(private platform:Platform,
    private platform2:Platform,
     private platform3:Platform ) { 
    this.platform.ready().then(() =>{
      this.data = 
      [{id: 101, name: "Nombre de Ejercicios Nombre Tabla Completa"},
      {id: 102, name:"Nivel novato"}
      ,{id: 103, name: "Nivel Medio"}
      ,{id: 104, name: "Nivel Fuerte"}
      ,{id: 105, name: "Nivel Extremo"}]
     
    }),
    this.platform2.ready().then(() =>{
      this.data2 = 
      [{id2: 101, name: "Texto Ejercicios"},
      {id2: 102, name:"Espada "}
      ,{id2: 103, name: "Agdomen"}
      ,{id2: 104, name: "Nivel Fuerte"}
      ,{id2: 105, name: "Nivel Extremo"}]
     
    })
    this.platform3.ready().then(() =>{
      this.data3 = 
      [{id3: 101, name: "Text Ejercicios"},
      {id3: 102, name:"Espada "}
      ,{id3: 103, name: "Agdomen"}
      ,{id3: 104, name: "Nivel Fuerte"}
      ,{id3: 105, name: "Nivel Extremo"}]
     
    })


    }
    OnChange(event){
      alert("selclected is = "+ event.target.value);
    }
    OnChange2(event2){
      alert("selclected is = "+ event2.target.value);
    }
    OnChange3(event3){
      alert("selclected is = "+ event3.target.value);
    }
   
  ngOnInit() {
  }

}
