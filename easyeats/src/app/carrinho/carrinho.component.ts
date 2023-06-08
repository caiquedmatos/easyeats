import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  constructor(private http: HttpClient, private router: Router) { this.itens = []; }

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  itens: any[];

  ngOnInit() {
    this.Itens();
  }

  exibirItens(itens: any[]) {
    this.itens = itens;
  }

  Itens() {
    console.log(this.email);

    $.post(
      'http://localhost:3000/carrinhoUser',
      {
        "email": this.email
      },
      (res) => {
        console.log('Enviei o Json do Email');
        console.log(res);
        let itens = res;
        this.exibirItens(itens);
      }
    );
  }

  EnviarCozinha() {
    for (let i: number = 0; i < this.itens.length; i++) {
      console.log(this.itens[i]);
      console.log("Esse é o objeto do item " + i);

      $.post(
        'http://localhost:3000/cadastroCozinha',
        {
          "item": this.itens[i].item,
          "preco": this.itens[i].preco,
          "nome": this.itens[i].nome,
          "email": this.itens[i].email
        },
        (res) => {
          console.log('Enviei o Json.');
          console.log(res);
        }
      );

      $.post('http://localhost:3000/deleteItem', {
        "itemId": this.itens[i].itemId
      }, (res) => {
        console.log(res);
        this.Itens();
      });
    }

    window.location.href = '/acompanhar-pedidos';
  }

  deletaPost(itemId: string) {
    console.log("Função acionada");
    console.log(itemId);

    $.post('http://localhost:3000/deleteItem', {
      "itemId": itemId
    }, (res) => {
      console.log(res);
      window.location.href = '/carrinho';
      this.Itens();
    });
  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';

// @Component({
//   selector: 'app-carrinho',
//   templateUrl: './carrinho.component.html',
//   styleUrls: ['./carrinho.component.css']
// })
// export class CarrinhoComponent {
//   constructor(private http: HttpClient, private router: Router) {this.itens = [];}

//   nome = localStorage.getItem('nome');
//   email = localStorage.getItem('email');
//   telefone = localStorage.getItem('telefone');
//   senha = localStorage.getItem('senha');
//   id = localStorage.getItem('id');

//   itens: any[];

//   ngOnInit(){
//     this.Itens();
//   }

//   exibirItens(itens: any[]) {
//     this.itens = itens;
//   }

//   Itens() {
//     $.get('http://localhost:3000/carrinhoUser', { email:this.email }, (res) => {
//       let itens = res;
//       this.exibirItens(itens);
//     });
//   }

//   deletaPost(itemId:string){
//     console.log("Função acionada");
//     console.log(itemId);

//     $.post('http://localhost:3000/deleteItem', {
//       "itemId":itemId
//     }, (res) => {
//       console.log(res);
//       window.location.href = '/carrinho';
//       this.Itens();
//     });
//   }
// }
