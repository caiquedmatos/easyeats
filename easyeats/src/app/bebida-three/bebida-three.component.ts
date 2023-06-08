import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'app-bebida-three',
  templateUrl: './bebida-three.component.html',
  styleUrls: ['./bebida-three.component.css']
})
export class BebidaThreeComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Chá de Romã Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Suco de romã, planta e sal no copo'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/bebidas/3.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '64,07'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Chá de Romã Eats";
    let preco = "R$ 64,07";

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
