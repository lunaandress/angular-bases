import { Component, signal } from "@angular/core";


@Component({
    templateUrl:'./hero-page.html',
})
export class HeroPageComponent{
//Atributos



// Crear 2 Señales
name = signal('Ironman')
age = signal(45)


//FUNCION y METODOS
getHeroDescription(){
return  `${ this.name()} - ${ this.age() }`;
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

nameUpper(){



}


}


