import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-burguer-three',
  templateUrl: './burguer-three.component.html',
  styleUrls: ['./burguer-three.component.css']
})
export class BurguerThreeComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'Jardim Fontalis Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Pão francês mesmo, alface do jardim, queijo da padaria do cezinha e maionese do Pão de Mel'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/hamburguer/3.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '64,40'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Jardim Fontalis Eats";
    let preco = "R$ 64,40";

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
