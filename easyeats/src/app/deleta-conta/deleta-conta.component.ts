import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-deleta-conta',
  templateUrl: './deleta-conta.component.html',
  styleUrls: ['./deleta-conta.component.css']
})
export class DeletaContaComponent {

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.nome = localStorage.getItem('nome');
    this.email = localStorage.getItem('email');
    this.telefone = localStorage.getItem('telefone');
    this.senha = localStorage.getItem('senha');
    this.id = localStorage.getItem('id');
  }

  DeletarUsuario(senhaTest:string){

    if(senhaTest == this.senha)
    {
      console.log("Função acionada");
      $.post('http://localhost:3000/delete_usuario', {id:this.id}, (res) => {
      console.log(res);
      alert("Você acaba de deletar seu Usuário PARA SEMPRE.");
      window.location.href = '/';
      });
    }
    else
    {
      alert("Parece que você digitou a senha errada.");
    }
  }

  Cancelar(){
    window.location.href = '/perfil-proprio-usuario';
  }
}