import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl:'./hero-page.html',
    imports:[UpperCasePipe]
})
export class HeroPageComponent{
//Atributos



// Crear 2 Señales
name = signal('Ironman')
age = signal(45)


//señal computada

heroDescription = computed(()=>{
  const descriptions =`${this.name()}-${this.age()}`;
  return descriptions;
})

capitalizedName = computed(()=>this.name().toUpperCase())

//FUNCION y METODOS
getHeroDescription(){
return  `${ this.name()} - ${this.age() }`;
}

changeHero(){
  this.name.set('Spiderman'),
  this.age.set(22)
}

resetForm(){
this.name.set('Ironman')
this.age.set(45)
}
changeAge(){
  this.age.set(60)
}

}


