import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-pratos-one',
  templateUrl: './pratos-one.component.html',
  styleUrls: ['./pratos-one.component.css']
})
export class PratosOneComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Salmão Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Sal mão na brasa da AirFrier'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/pratos/1.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '112,10'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Sal mão na brasa da AirFrier";
    let preco = "R$ 112,10";

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
