import { Component, signal} from '@angular/core';

@Component({
  templateUrl:'./counter-page.html',
  styles:`
  button{
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
  }
  `
})


export class CounterPageComponent {
  counter = 10;
  counterSignal=signal(20)//SEÑAL


//Funciones
increaseBy(value : number){
  this.counter+=value;
  //this.counterSignal.set(this.counterSignal()+value);
  this.counterSignal.update(current => current+value)
}

decrementBY(value : number){
  this.counter-=value;
}

restarCounter(){
  this.counter=0;
  this.counterSignal.set(0);
}







}
