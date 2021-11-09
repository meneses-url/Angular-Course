import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListadoComponent } from './heroes/listado/listado.component';

//Este es el unico modulo que hay por el momento
@NgModule({
  declarations: [AppComponent], //Acá se ponen los componentes
  imports: [BrowserModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//El objetivo de los modulos es ayudar a agrupar componentes o piezas de nuestro codigo que tienen sentido entre si , Encapsular las cosas ayudarnos con la carga perezosa o lazy Low.
