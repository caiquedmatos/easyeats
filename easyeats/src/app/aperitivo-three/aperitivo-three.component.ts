import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-aperitivo-three',
  templateUrl: './aperitivo-three.component.html',
  styleUrls: ['./aperitivo-three.component.css']
})
export class AperitivoThreeComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'SalamEats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Salame e uns negócios'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/aperitivos/3.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '13,13'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "SalamEats";
    let preco = "R$ 13,13";

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
