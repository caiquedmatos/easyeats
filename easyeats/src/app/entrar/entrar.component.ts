import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  showPreloader: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showPreloader = false;
    }, 6000);
  }
  
}
