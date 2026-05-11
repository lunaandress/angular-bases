import { Component } from '@angular/core';

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


//Funciones
increaseBy(value : number){
  this.counter+=value;
}

decrementBY(value : number){
  this.counter-=value;
}

restarCounter(){
  this.counter=0;
}







}
