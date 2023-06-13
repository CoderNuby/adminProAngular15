import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progress Bar', url: '/dashboard/progress' },
        { titulo: 'Graficas', url: '/dashboard/grafica-1' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'RXJS', url: '/dashboard/rxjs' }
      ]
    }
  ];

  constructor() { }
}
