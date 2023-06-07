import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  elementoTheme = document.getElementById("theme");

  constructor()
  {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.elementoTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.elementoTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{

    let elementosColores: HTMLCollectionOf<Element> = document.getElementsByClassName("selector");;
    for (let i = 0; i < elementosColores.length; i++) {
      const elemento = elementosColores[i];
      elemento.classList.remove("working");
      const btnTheme = elemento.getAttribute("data-theme");
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.elementoTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elemento.classList.add("working");
      }
    }
  }
}
