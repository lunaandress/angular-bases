import { Component, input } from '@angular/core';
import { Character } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-caracter-list',
  templateUrl: './caracter-list.html',
})
export class CaracterListComponent {
listName = input.required<string>();
characters = input.required<Character[]>();

}
