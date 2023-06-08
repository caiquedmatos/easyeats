import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardapiosComponent } from './cardapios/cardapios.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { FritasComponent } from './fritas/fritas.component';
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { EntrarComponent } from './entrar/entrar.component';
import { FavoritosComponent } from "./favoritos/favoritos.component";
import { BurguerOneComponent } from './burguer-one/burguer-one.component';
import { BurguerTwoComponent } from "./burguer-two/burguer-two.component";
import { BurguerThreeComponent } from './burguer-three/burguer-three.component';
import { BurguerFourComponent } from './burguer-four/burguer-four.component';
import { BurguerFiveComponent } from './burguer-five/burguer-five.component';
import { CardapioHamburguerComponent } from './cardapio-hamburguer/cardapio-hamburguer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlteraDadosComponent } from './altera-dados/altera-dados.component';
import { DeletaContaComponent } from './deleta-conta/deleta-conta.component';
import { AperitivoOneComponent } from './aperitivo-one/aperitivo-one.component';
import { AperitivoTwoComponent } from './aperitivo-two/aperitivo-two.component';
import { AperitivoThreeComponent } from './aperitivo-three/aperitivo-three.component';
import { AperitivoFourComponent } from './aperitivo-four/aperitivo-four.component';
import { AperitivoFiveComponent } from './aperitivo-five/aperitivo-five.component';
import { SobremesaOneComponent } from './sobremesa-one/sobremesa-one.component';
import { SobremesaTwoComponent } from './sobremesa-two/sobremesa-two.component';
import { SobremesaThreeComponent } from './sobremesa-three/sobremesa-three.component';
import { SobremesaFourComponent } from './sobremesa-four/sobremesa-four.component';
import { SobremesaFiveComponent } from './sobremesa-five/sobremesa-five.component';
import { PratosOneComponent } from './pratos-one/pratos-one.component';
import { PratosTwoComponent } from './pratos-two/pratos-two.component';
import { PratosThreeComponent } from './pratos-three/pratos-three.component';
import { PratosFourComponent } from './pratos-four/pratos-four.component';
import { PratosFiveComponent } from './pratos-five/pratos-five.component';
import { JapaOneComponent } from './japa-one/japa-one.component';
import { JapaTwoComponent } from './japa-two/japa-two.component';
import { JapaThreeComponent } from './japa-three/japa-three.component';
import { JapaFourComponent } from './japa-four/japa-four.component';
import { JapaFiveComponent } from './japa-five/japa-five.component';
import { CardapioJapaComponent } from './cardapio-japa/cardapio-japa.component';
import { CardapioSobremesasComponent } from './cardapio-sobremesas/cardapio-sobremesas.component';
import { CardapioPratosComponent } from './cardapio-pratos/cardapio-pratos.component';
import { CardapioBebidaComponent } from './cardapio-bebida/cardapio-bebida.component';
import { BebidaOneComponent } from './bebida-one/bebida-one.component';
import { BebidaTwoComponent } from './bebida-two/bebida-two.component';
import { BebidaThreeComponent } from './bebida-three/bebida-three.component';
import { BebidaFourComponent } from './bebida-four/bebida-four.component';
import { BebidaFiveComponent } from './bebida-five/bebida-five.component';
import { AcompanharPedidosComponent } from './acompanhar-pedidos/acompanhar-pedidos.component';
import { CozinhaComponent } from './cozinha/cozinha.component';

const routes: Routes = [

  { pathMatch: 'full', path: '', component: EntrarComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cardapio-aperitivos', component: ListarAperitivosComponent },
  { path: 'cardapio', component: CardapiosComponent },
  { path: 'porcao-de-fritas', component: FritasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'burguerOne', component: BurguerOneComponent },
  { path: 'burguerTwo', component: BurguerTwoComponent },
  { path: 'burguerThree', component: BurguerThreeComponent },
  { path: 'burguerFour', component: BurguerFourComponent },
  { path: 'burguerFive', component: BurguerFiveComponent },
  { path: 'cardapioBurguer', component: CardapioHamburguerComponent },
  { path: 'meu-perfil', component: PerfilComponent },
  { path: 'deleta-conta', component: DeletaContaComponent },
  { path: 'altera-dados', component: AlteraDadosComponent },
  { path: 'aperitivo-one', component: AperitivoOneComponent },
  { path: 'aperitivo-two', component: AperitivoTwoComponent },
  { path: 'aperitivo-three', component: AperitivoThreeComponent },
  { path: 'aperitivo-four', component: AperitivoFourComponent },
  { path: 'aperitivo-five', component: AperitivoFiveComponent },
  { path: 'sobremesaOne', component: SobremesaOneComponent },
  { path: 'sobremesaTwo', component: SobremesaTwoComponent },
  { path: 'sobremesaThree', component: SobremesaThreeComponent },
  { path: 'sobremesaFour', component: SobremesaFourComponent },
  { path: 'sobremesaFive', component: SobremesaFiveComponent },
  { path: 'pratoOne', component: PratosOneComponent },
  { path: 'pratoTwo', component: PratosTwoComponent },
  { path: 'pratoThree', component: PratosThreeComponent },
  { path: 'pratoFour', component: PratosFourComponent },
  { path: 'pratoFive', component: PratosFiveComponent },
  { path: 'japaOne', component: JapaOneComponent },
  { path: 'japaTwo', component: JapaTwoComponent },
  { path: 'japaThree', component: JapaThreeComponent },
  { path: 'japaFour', component: JapaFourComponent },
  { path: 'japaFive', component: JapaFiveComponent },
  { path: 'cardapio-japa', component: CardapioJapaComponent },
  { path: 'cardapio-sobremesa', component: CardapioSobremesasComponent },
  { path: 'cardapio-prato', component: CardapioPratosComponent },
  { path: 'cardapio-bebida', component: CardapioBebidaComponent },
  { path: 'bebidaOne', component: BebidaOneComponent },
  { path: 'bebidaTwo', component: BebidaTwoComponent },
  { path: 'bebidaThree', component: BebidaThreeComponent },
  { path: 'bebidaFour', component: BebidaFourComponent },
  { path: 'bebidaFive', component: BebidaFiveComponent },
  { path: 'acompanhar-pedidos', component: AcompanharPedidosComponent},
  { path: 'cozinha', component: CozinhaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
