import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage {
  asistencias = [
    { asignatura: 'Matemáticas', fecha: '2024-09-20', estado: 'Asistió' },
    { asignatura: 'Historia', fecha: '2024-09-21', estado: 'No asistió' },
    { asignatura: 'Ciencias', fecha: '2024-09-22', estado: 'Asistió' },
    // Añade más registros de asistencia según sea necesario
  ];

  constructor() {}
}
