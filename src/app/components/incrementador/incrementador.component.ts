import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input("incrementador-progreso") progreso: number = 100;
  @Input("incrementador-btnClass") btnClass: string = 'btn-primary';
  @Output() changingValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    
  }

  get progresoEnPorcentaje(): string{
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number): void{
    if(this.progreso <= 0 && valor <= 0){
      this.changingValue.emit(0);
      this.progreso = 0;
    }else if(this.progreso >= 100 && valor >= 0){
      this.changingValue.emit(100);
      this.progreso = 100;
    }else{
      this.progreso = this.progreso + valor;
      this.changingValue.emit(this.progreso);
    }
  }

  onChange(event: number): void{
    if(event >= 100){
      this.progreso = 100;
    }else if(event <= 0){
      this.progreso = 0;
    }else{
      this.progreso = event;
    }

    this.changingValue.emit(event);
  }
}
