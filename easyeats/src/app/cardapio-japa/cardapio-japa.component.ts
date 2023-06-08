import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-japa',
  templateUrl: './cardapio-japa.component.html',
  styleUrls: ['./cardapio-japa.component.css']
})
export class CardapioJapaComponent {
  burguers = [
    {
      imagem: '../../../assets/imagens/japa/1.1.png',
      nome: 'Kakashi Eats',
      descricao: 'Arroz, salmão, alga, ovas de tilápia e cream cheese',
      preco: 'R$ 31,13',
      link: '../japaOne'
    },
    {
      imagem: '../../../assets/imagens/japa/2.1.png',
      nome: 'Sakura Eats',
      descricao: 'Arroz,faixa de salmão, brócolis e pepino',
      preco: 'R$ 26,02',
      link: '../japaTwo'
    },
    {
      imagem: '../../../assets/imagens/japa/3.1.png',
      nome: 'Hot roll Eats',
      descricao: 'Salame, alga, arroz, creme de queijo e empanado',
      preco: 'R$ 27,89',
      link: '../japaThree'
    },
    {
      imagem: '../../../assets/imagens/japa/4.1.png',
      nome: 'Granulado de Salmão Eats',
      descricao: 'Tem arroz, tem gergilim, tem uma lasquinha salmão, tem pepino e tem alho poró',
      preco: 'R$ 12,33',
      link: '../japaFour'
    },
    {
      imagem: '../../../assets/imagens/japa/5.1.png',
      nome: 'Temakeats',
      descricao: 'salmão ralado, rúcula ralada, creme de cebola, arroz grudado e alga enrolada',
      preco: 'R$ 18,20',
      link: '../japaFive'
    },
  ];
}
