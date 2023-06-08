import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-aperitivo-five',
  templateUrl: './aperitivo-five.component.html',
  styleUrls: ['./aperitivo-five.component.css']
})
export class AperitivoFiveComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'Kibe Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Pouca carne e muito trigo de quibe'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/aperitivos/5.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '5,93'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Kibe Eats";
    let preco = "R$ 5,93";

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
