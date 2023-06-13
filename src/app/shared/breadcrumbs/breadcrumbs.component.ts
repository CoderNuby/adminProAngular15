import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string = "";
  tituloSubscription!: Subscription;

  constructor(private router: Router){
    this.tituloSubscription = this.getTitulo().subscribe(data => {
      this.titulo = data.titulo;
    });
  }

  ngOnDestroy(): void {
      this.tituloSubscription.unsubscribe();
  }

  getTitulo(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    );
  }
}
