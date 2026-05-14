import { Component, signal } from '@angular/core';

interface Character{
  id:number,
  name:string,
  power:number,

}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class DragonballPageComponent {

  //Señal normal
characters = signal<Character[]>([
{id: 1 , name: 'Goku',power:9001},
{id: 2 , name: 'Vegeta',power:9000},
{id: 3 , name: 'Picoro',power:3000},
{id: 4 , name: 'Yamcha',power:500},
]);


}

