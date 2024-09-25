import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage {
  asignaturas = [
    { nombre: 'Matemáticas', seccion: 'A' },
    { nombre: 'Historia', seccion: 'B' },
    { nombre: 'Ciencias', seccion: 'C' },
    // Añade más asignaturas según sea necesario
  ];

  constructor() {}
}
