import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Hola Mundo</h1>
    <h2>Counter Component Page</h2>
    <h2>Counter:{{counter}}</h2> <!---esto es una expreciones {{}} donde puede poner valores de mi clase  y mostrarlo en mi paguina--->
    <button (click)="increaseBy(5)">+1</button><!--Los EVENTOS en angular se ponen en ()-->
  `
})
export class CounterPageComponent {
  counter = 10;

//Funcion
increaseBy(value : number){

  this.counter+=value;
}
}
