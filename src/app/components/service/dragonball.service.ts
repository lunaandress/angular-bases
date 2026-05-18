import { Injectable, signal } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Injectable({providedIn: 'root'})//este no es mas que un decorador para dtransformar  mi clase que es un servicio
export class DragonballService {
  constructor() { }

//Señal normal
characters = signal<Character[]>([
{id: 1 , name: 'Goku',power:9001},
{id: 2 , name: 'Vegeta',power:8000},

]);

addCharacter(character:Character) {
this.characters.update(list=>[...list,character]);
}
}
