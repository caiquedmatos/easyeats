import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-japa-four',
  templateUrl: './japa-four.component.html',
  styleUrls: ['./japa-four.component.css']
})
export class JapaFourComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'Granulado de Salmão Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Tem arroz, tem gergilim, tem uma lasquinha salmão, tem pepino e tem alho poró'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/japa/4.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '12,33'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Granulado de Salmão Eats";
    let preco = "R$ 12,33";

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
