import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  intervalSubscription!: Subscription;

  constructor(){
    this.intervalSubscription = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(1000).pipe(
      map(valor => {
        return valor + 1
      }),
      filter((valor) => valor % 2 == 0)
    );
  }

  retornaObservable(): Observable<number>{
    let contador = 0;
    return new Observable<number>(observer => {
      let intervalo = setInterval(() => {
        if(contador == 10){
          clearInterval(intervalo);
          observer.complete();
        }

        if(contador == 2){
          observer.error("Se produjo un error");
        }
        observer.next(contador);
        contador++;
      }, 1000);
    });
  }
}
