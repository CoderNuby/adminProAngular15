import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progresoUno: number = 100;
  progresoDos: number = 40;

  get getProgresoUno(): string{
    return `${this.progresoUno}%`;
  }

  get getProgresoDos(): string{
    return `${this.progresoDos}%`;
  }
}
