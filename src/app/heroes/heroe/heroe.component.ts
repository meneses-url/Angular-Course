import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.Component.html',
})
export class HeroComponent {
  nombre: string = 'Iroman';
  edad: number = 45;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 31;
  } //ONE WAY DATA VAINDING O ENLASADO EN UNA SOLA VIA
}
