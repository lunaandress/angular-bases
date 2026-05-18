import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interface/character.interface';


@Component({
  selector: 'dragonball-carater-add',

  templateUrl: './carater-add.html',

})
export class CaraterAddComponent {

name=signal(' ');// el nombre y el poder resiven una señal
power=signal(0);
characters: any;


newCharacter= output<Character>()

addCharacter() {
  if (!this.name()|| !this.power()|| this.power()<0 ){
      return;
  } else {
      const newCharacter:Character = {
        id:Math.floor(Math.random()*1000),
        name:this.name(),
        power:this.power()
      };

      //this.characters().push(newCharacter); opcion 1 no recomendada
      //this.characters.update((list)=>[...list,newCharacter]);
      this.newCharacter.emit(newCharacter)

      this.resertFile ();
  }

}


  resertFile (){
    this.name.set('');
    this.power.set(0);
  }

}






