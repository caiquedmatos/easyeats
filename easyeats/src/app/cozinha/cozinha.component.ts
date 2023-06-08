import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent {
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

    $.get(
      'http://localhost:3000/cozinha',
      {
      },
      (res) => {
        console.log('Quero ver a cozinha!');
        console.log(res);
        let itens = res;
        this.exibirItens(itens);
      }
    );
  }

  deletaPost(itemId:string){
    console.log("Função acionada");
    console.log(itemId);

    $.post('http://localhost:3000/deleteItemCozinha', {
      "itemId":itemId
    }, (res) => {
      console.log(res);
      window.location.href = '/cozinha';
      this.Itens();
    });
  }
}
