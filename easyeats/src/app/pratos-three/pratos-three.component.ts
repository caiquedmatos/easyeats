import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-pratos-three',
  templateUrl: './pratos-three.component.html',
  styleUrls: ['./pratos-three.component.css']
})
export class PratosThreeComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'OmelEats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Arroz, feijão, ovo e batata frita'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/pratos/3.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '32,23'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "OmelEats";
    let preco = "R$ 32,23";

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
