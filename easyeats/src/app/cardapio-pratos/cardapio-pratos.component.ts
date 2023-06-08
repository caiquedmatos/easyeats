import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-pratos',
  templateUrl: './cardapio-pratos.component.html',
  styleUrls: ['./cardapio-pratos.component.css']
})
export class CardapioPratosComponent {

  burguers = [
    {
      imagem: '../../../assets/imagens/pratos/1.1.png',
      nome: 'Salmão Eats',
      descricao: 'Sal mão na brasa da AirFrier',
      preco: 'R$ 112,10',
      link: '../pratoOne'
    },
    {
      imagem: '../../../assets/imagens/pratos/2.1.png',
      nome: 'Parmê Eats',
      descricao: 'Arroz, Batata rústica, umas plantas, carne né empanada e o queijo por cima',
      preco: 'R$ 95,37',
      link: '../pratoTwo'
    },
    {
      imagem: '../../../assets/imagens/pratos/3.1.png',
      nome: 'OmelEats',
      descricao: 'Arroz, feijão, ovo e batata frita',
      preco: 'R$ 32,23',
      link: '../pratoThree'
    },
    {
      imagem: '../../../assets/imagens/pratos/4.1.png',
      nome: 'Feijuca Eats',
      descricao: 'Arroz, feijuca, farofine e os matinho verde',
      preco: 'R$ 49,00',
      link: '../pratoFour'
    },
    {
      imagem: '../../../assets/imagens/pratos/5.1.png',
      nome: 'PF Eats',
      descricao: 'Bifão, arroz, feijão preto, saladine e batata frita',
      preco: 'R$ 19,99',
      link: '../pratoFive'
    },
  ];
}
