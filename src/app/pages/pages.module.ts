import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { GraficaFirstComponent } from './grafica-first/grafica-first.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficaFirstComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ProgressComponent,
    GraficaFirstComponent,
    PagesComponent
  ]
})
export class PagesModule { }
