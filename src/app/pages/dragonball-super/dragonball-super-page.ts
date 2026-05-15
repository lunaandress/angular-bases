
import { Component, signal } from '@angular/core';
import { CaracterListComponent } from "../../components/dragonball/caracter-list/caracter-list";

interface Character{
  id:number,
  name:string,
  power:number,
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.html',
  imports: [CaracterListComponent],
})
export class DragonballSuperPageComponent {

name=signal('');
power=signal(0);

  //Señal normal
characters = signal<Character[]>([
{id: 1 , name: 'Goku',power:9001},
{id: 2 , name: 'Vegeta',power:8000},

]);

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

