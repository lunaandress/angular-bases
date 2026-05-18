
import { Component, inject} from '@angular/core';
import { CaracterListComponent } from "../../components/dragonball/caracter-list/caracter-list";
import { CaraterAddComponent } from '../../components/dragonball/carater-add/carater-add';
import { DragonballService } from '../../components/service/dragonball.service';


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

public dragonballService =  inject(DragonballService);


}

