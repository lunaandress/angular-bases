
import { Component, signal } from '@angular/core';
import { CaracterListComponent } from "../../components/dragonball/caracter-list/caracter-list";
import { CaraterAddComponent } from '../../components/dragonball/carater-add/carater-add';


interface Character{
  id:number,
  name:string,
  power:number,
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.html',
  imports: [CaracterListComponent , CaraterAddComponent],
})
export class DragonballSuperPageComponent {

name=signal('');
power=signal(0);

  //Señal normal
characters = signal<Character[]>([
{id: 1 , name: 'Goku',power:9001},
{id: 2 , name: 'Vegeta',power:8000},

]);

addCharacter(character:Character) {
this.characters.update(list=>[...list,character]);
}


  resertFile (){
    this.name.set('');
    this.power.set(0);
  }


}

