import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    this.getUsuarios(1).then(usuarios => {
      console.log(usuarios)
    });
  }

  getUsuarios(page: number = 0){
    let url = `https://reqres.in/api/users?page=${page}`;

    return new Promise((resolve) => {
      fetch(url).then(res => res.json()).then(body => resolve(body.data));
    });
  }
}
