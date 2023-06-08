import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-bebida',
  templateUrl: './cardapio-bebida.component.html',
  styleUrls: ['./cardapio-bebida.component.css']
})
export class CardapioBebidaComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/bebidas/1.1.png',
      nome: 'Jack Eats',
      descricao: 'Jack e Daniels',
      preco: 'R$ 70,05',
      link: '../bebidaOne'
    },
    {
      imagem: '../../../assets/imagens/bebidas/2.1.png',
      nome: 'Caipi Siciliano Eats',
      descricao: 'Caipirinha de morango, com fatias de limão siciliano',
      preco: 'R$ 58,83',
      link: '../bebidaTwo'
    },
    {
      imagem: '../../../assets/imagens/bebidas/3.1.png',
      nome: 'Chá de Romã Eats',
      descricao: 'Suco de romã, planta e sal no copo',
      preco: 'R$ 64,07',
      link: '../bebidaThree'
    },
    {
      imagem: '../../../assets/imagens/bebidas/4.1.png',
      nome: 'Caipibola Eats',
      descricao: 'Caipirinha de carambola,  carambola, limão, sal e pimenta',
      preco: 'R$ 71,90',
      link: '../bebidaFour'
    },
    {
      imagem: '../../../assets/imagens/bebidas/5.1.png',
      nome: 'Suco Eats',
      descricao: 'Limão, morango, uva, jaca, melancia ou caju',
      preco: 'R$ 40,91',
      link: '../bebidaFive'
    },
  ];
}
