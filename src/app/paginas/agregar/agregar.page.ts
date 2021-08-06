import { Component, OnInit } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  time: BehaviorSubject<string> =
   new BehaviorSubject('00:00');

  timer: number;// en segundo
  interval;
  startDuration = 60;


  state: 'start' | 'stop' = 'stop';
 constructor(){}

  startTimer(duration: number){
     this.state = 'start';
     clearInterval(this.interval);
     this.timer = duration * 60;
     this.updateTimeValue(); 
     this.interval = setInterval( () => {
       this.updateTimeValue();  
     }, 1000);
   }
   stopTimer(){
     clearInterval(this.interval);
     this.time.next('00:00');
     this.state = 'stop';
   }

   updateTimeValue(){
     let minutos: any = this.timer / 60;
     let segundos: any = this.timer % 60;

     minutos = String ('0' + Math.floor(minutos)).slice(-2);
     segundos = String ('0' + Math.floor(segundos)).slice(-2);

     const text = minutos + ':' + segundos;
     this.time.next(text)

     --this.timer; 

     if (this.timer < 0) {
     this.startTimer(this.startDuration);
     }

   }
}