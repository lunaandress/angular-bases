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


name=signal('Gohan');
power=signal(100);


addCharacter() {
  if (!this.name()|| !this.power()|| this.power()<0 ){
      return;
  } else {
      const newCharacter:Character = {
        id:this.characters.length+1,
        name:this.name(),
        power : this.power()
      };

      //this.characters().push(newCharacter); opcion 1 no recomendada
      this.characters.update((list)=>[...list,newCharacter]);

      this.resertFile ();
  }

}


  resertFile (){
    this.name.set('');
    this.power.set(0);
  }


}

