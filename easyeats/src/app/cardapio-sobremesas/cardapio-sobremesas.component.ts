import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-sobremesas',
  templateUrl: './cardapio-sobremesas.component.html',
  styleUrls: ['./cardapio-sobremesas.component.css']
})
export class CardapioSobremesasComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/sobremesas/1.1.png',
      nome: 'Pacumê de bombom Eats',
      descricao: 'Bombonzine, leite, leite de creme e manteiga',
      preco: 'R$ 60,99',
      link: '../sobremesaOne'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/2.1.png',
      nome: 'Torta de MorangEats',
      descricao: 'Morango, creme, e torta (Fatia)',
      preco: 'R$ 24,90',
      link: '../sobremesaTwo'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/3.1.png',
      nome: 'Palha Italiana Eats',
      descricao: 'Bolacha de Maizena, brigadeiro, e açucar refinade',
      preco: 'R$ 18,42',
      link: '../sobremesaThree'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/4.1.png',
      nome: 'Bolo de milho',
      descricao: 'Bolo e milho',
      preco: 'R$ 13,18',
      link: '../sobremesaFour'
    },
    {
      imagem: '../../../assets/imagens/sobremesas/5.1.png',
      nome: 'Torta de cuzcuz',
      descricao: 'Aí tem cuzcuz, tem ovo, tem cereja, tem chocolate branco, tem planta e tem frango',
      preco: 'R$ 113,48',
      link: '../sobremesaFive'
    },
  ];
}
