import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-sobremesa-five',
  templateUrl: './sobremesa-five.component.html',
  styleUrls: ['./sobremesa-five.component.css']
})
export class SobremesaFiveComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'Torta de cuzcuz'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Aí tem cuzcuz, tem ovo, tem cereja, tem chocolate branco, tem planta e tem frango'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/sobremesas/5.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '113,48'; // Inicialização da propriedade 'preco' no construtor
  }


   nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

 titulo: string; // Declaração da propriedade 'titulo' sem inicialização
  descricao: string; // Declaração da propriedade 'descrição' sem inicialização
  img: string; // Declaração da propriedade 'img' sem inicialização
  preco: string; // Declaração da propriedade 'preço' sem inicialização

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Torta de cuzcuz";
    let preco = "R$ 113,48";

    $.post(
      'http://localhost:3000/adicionaItem',
      {
        "item": item,
        "preco": preco,
        "nome": this.nome,
        "email": this.email
      },
      (res) => {
        console.log('Enviei o Json do Item');
        console.log(res);
        if (res === 'Item Atualizado') {
          this.router.navigate(['/carrinho']);
        } else {
          alert('Erro no Banco, Refaça o Login.');
        }
      }
    );
  }
}
