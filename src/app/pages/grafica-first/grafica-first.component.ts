import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica-first',
  templateUrl: './grafica-first.component.html',
  styles: [
  ]
})
export class GraficaFirstComponent {
  
  dataAlumnosPorCarrera: ChartData<'doughnut'> = {
    labels: [ 'Ing. en sistemas', 'Informatica', 'Aeronautica' ],
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] },
      { data: [ 300, 70, 400 ] },
      { data: [ 150, 200, 30 ] }
    ]
  };

  dataCompras: ChartData<'doughnut'> = {
    labels: [ 'Pan', 'Refersco', 'Tacos' ],
    datasets: [
      { data: [ 10, 15, 40 ] }
    ]
  };
}
