import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroComponent, ListadoComponent], //Nos dice que cosas cotiene este modulo

  exports: [ListadoComponent], // Que cosas quiero hacer publicas o visibles fuera de este modulo

  imports: [
    CommonModule, //Lo necesitamos para trabajr con ngForOf, ngIf, ngIfElse
  ], //Solo almacena modulos
})
export class HeroesModule {}
