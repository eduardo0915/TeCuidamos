import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

const circleR = 80;
const circleDasherray = 2 * Math.PI * circleR;


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  time: BehaviorSubject<string>= new BehaviorSubject('00:00');

  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;// en segundo
  interval;

  StartDuracion = 1;

  circleR = circleR;
  circleDasherray = circleDasherray;

  state: 'start' | 'stop' = 'stop';
 
  constructor(){}
  
      startTimer(duration: number){
        this.state = 'start';
        clearInterval(this.interval);
        this.timer = duration * 5;
        this.updateTimeValue();
        this.interval = setInterval( ()=>{
        this.updateTimeValue();
        },1000);
      }
      stopTimer(){
        clearInterval(this.interval);
        this.time.next('00:00');
        this.state = 'stop';
      }

      percentageOffset(percent){
        const percentFloat = percent / 100;
        return circleDasherray  * (1 - percentFloat);
      } 
  updateTimeValue(){
    let minutos: any = this.timer / 60;
    let segundo: any = this.timer % 60;
  
    minutos = String('0'+ Math.floor(minutos)).slice(-2);
    segundo = String('0'+ Math.floor(segundo)).slice(-2);
  
    const text = minutos + ':' + segundo;
    this.time.next(text);

    const totalTiempo = this.StartDuracion * 60;
    const percentage = ((totalTiempo - this.timer) / totalTiempo) * 100;
    this.percent.next(percentage);

    --this.timer;
  
    if(this.timer < -1){
      this.startTimer(this.StartDuracion);
    }
  }
}