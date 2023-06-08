import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-japa-five',
  templateUrl: './japa-five.component.html',
  styleUrls: ['./japa-five.component.css']
})
export class JapaFiveComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'TemakEats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Salmão ralado, rúcula ralada, creme de cebola, arroz grudado e alga enrolada'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/japa/5.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '18,20'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "TemakEats";
    let preco = "R$ 18,20";

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
