import { Component } from '@angular/core';


@Component({
  selector: 'app-cardapio-hamburguer',
  templateUrl: './cardapio-hamburguer.component.html',
  styleUrls: ['./cardapio-hamburguer.component.css']
})
export class CardapioHamburguerComponent {

  burguers = [
    {
      imagem: '../../../assets/imagens/hamburguer/1.1.png',
      nome: 'Capão Redondo Eats',
      descricao: 'Dois hamburgueres, alface, queijo, molho especial, cebola, picles e um pão com gergilim',
      preco: 'R$ 81,67',
      link: '../burguerOne'
    },
    {
      imagem: '../../../assets/imagens/hamburguer/2.1.png',
      nome: 'Vila Inglesa Eats',
      descricao: 'Pão Inglês, hambúrguer inglês, maionese inglesa, triguilho inglês',
      preco: 'R$ 85,12',
      link: '../burguerTwo'
    },
    {
      imagem: '../../../assets/imagens/hamburguer/3.1.png',
      nome: 'Jardim Fontalis Eats',
      descricao: 'Pão francês mesmo, alface do jardim, queijo da padaria do cezinha e maionese do Pão de Mel',
      preco: 'R$ 64,40',
      link: '../burguerThree'
    },
    {
      imagem: '../../../assets/imagens/hamburguer/4.1.png',
      nome: 'Itaqua Eats',
      descricao: 'Pão de planta, carne de planta, queijo de planta',
      preco: 'R$ 20,89',
      link: '../burguerFour'
    },
    {
      imagem: '../../../assets/imagens/hamburguer/5.1.png',
      nome: 'Carapicuiba Eats',
      descricao: 'Pão, maionese, queijo, presunto, salame, quibe e alface vegano.',
      preco: 'R$ 17,17',
      link: '../burguerFive'
    },
  ];
}
