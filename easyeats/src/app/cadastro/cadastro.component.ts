import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private http: HttpClient, private router: Router) { }

  nomeSalvo = "";
  emailSalvo = "";
  telefoneSalvo = "";

  cadastroUser(nome: string, email: string, senha: string, telefone: string) {
    console.log("Passei no primeiro ponto do cadastro");

    if (nome.length < 3 || nome.length > 30) {
      alert("Seu nome precisa ter entre 3 e 30 caracteres."); 
      console.log("Seu nome precisa ter entre 3 e 30 caracteres.");
    }
    else if (senha.length < 6 || senha.length > 12) {
      alert("Sua senha precisa ter entre 6 e 12 caracteres.");
      console.log("Sua senha precisa ter entre 6 e 12 caracteres.");
    }
    else if (telefone.length < 11 || telefone.length > 11) {
      alert("Escreva um telefone válido com DDD. EX:11 98765-4321");
      console.log("Escreva um telefone válido com DDD. EX:11 98765-4321");
    }
    else {
      console.log("Passei no segundo ponto do cadastro");
      $.post("http://localhost:3000/cadastroUser", {
        "nome": nome,
        "senha": senha,
        "email": email,
        "telefone": telefone
      },
        (res) => {
          console.log("Passei no terceiro ponto do cadastro");
          console.log(res);
          if (res === "Email já existe") {
            alert("Esse email já foi cadastrado.");
          }
          else {
            console.log("Usuário adicionado!");
            window.location.href = "/login";
            this.nomeSalvo = nome;
            this.emailSalvo = email;
            this.telefoneSalvo = telefone;
          }
        });
    }
  }
}
