import { Character } from './../../interface/character.interface';
import { effect, Injectable, signal } from '@angular/core';



//FUNCION
const loaddFromLocalStorage=():Character[]=>{
const characters = localStorage.getItem('characters');
return characters ? JSON.parse(characters):[ ];
}



@Injectable({providedIn: 'root'})//este no es mas que un decorador para dtransformar  mi clase que es un servicio
export class DragonballService {
  constructor() { }

//Señal normal + LA FUNCION
characters = signal<Character[]>(loaddFromLocalStorage()
//{id: 1 , name: 'Goku',power:9001},
//{id: 2 , name: 'Vegeta',power:8000},
);

//efecto
saveToLocalStorage=effect(()=>{
  localStorage.setItem('character', JSON.stringify( this.characters()));

})


addCharacter(character:Character) {
this.characters.update(list=>[...list,character]);
}

}



