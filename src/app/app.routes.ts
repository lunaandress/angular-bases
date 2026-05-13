import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball';
import { HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path:'dragonball',
    component:DragonballPageComponent,
  },
  {
    path:'**',
    redirectTo:''
  }


];
