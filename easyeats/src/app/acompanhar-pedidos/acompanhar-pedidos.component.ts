import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-acompanhar-pedidos',
  templateUrl: './acompanhar-pedidos.component.html',
  styleUrls: ['./acompanhar-pedidos.component.css']
})
export class AcompanharPedidosComponent {
  constructor(private http: HttpClient, private router: Router) {this.itens = [];}

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  itens: any[];

  ngOnInit(){
    this.Itens();
  }

  exibirItens(itens: any[]) {
    this.itens = itens;
  }

  Itens() {
    console.log(this.email);

    $.post(
      'http://localhost:3000/cozinhaUser',
      {
        "email": this.email
      },
      (res) => {
        console.log('Enviei o Json do Email');
        console.log(res);
        let itens = res;
        this.exibirItens(itens);
      }
    );
  }
}
