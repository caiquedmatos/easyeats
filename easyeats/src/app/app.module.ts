import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { AperitivosModule } from './cardapios-aperitivos/aperitivos.module';
import { CardapiosComponent } from './cardapios/cardapios.component';
import { FritasComponent } from './fritas/fritas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BurguerOneComponent } from './burguer-one/burguer-one.component';
import { BurguerTwoComponent } from './burguer-two/burguer-two.component';
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
import { PratosOneComponent } from './pratos-one/pratos-one.component';
import { PratosTwoComponent } from './pratos-two/pratos-two.component';
import { PratosThreeComponent } from './pratos-three/pratos-three.component';
import { PratosFourComponent } from './pratos-four/pratos-four.component';
import { PratosFiveComponent } from './pratos-five/pratos-five.component';
import { SobremesaOneComponent } from './sobremesa-one/sobremesa-one.component';
import { SobremesaTwoComponent } from './sobremesa-two/sobremesa-two.component';
import { SobremesaThreeComponent } from './sobremesa-three/sobremesa-three.component';
import { SobremesaFourComponent } from './sobremesa-four/sobremesa-four.component';
import { SobremesaFiveComponent } from './sobremesa-five/sobremesa-five.component';
import { JapaOneComponent } from './japa-one/japa-one.component';
import { JapaTwoComponent } from './japa-two/japa-two.component';
import { JapaThreeComponent } from './japa-three/japa-three.component';
import { JapaFourComponent } from './japa-four/japa-four.component';
import { JapaFiveComponent } from './japa-five/japa-five.component';
import { CardapioPratosComponent } from './cardapio-pratos/cardapio-pratos.component';
import { CardapioSobremesasComponent } from './cardapio-sobremesas/cardapio-sobremesas.component';
import { CardapioJapaComponent } from './cardapio-japa/cardapio-japa.component';
import { CardapioBebidaComponent } from './cardapio-bebida/cardapio-bebida.component';
import { BebidaOneComponent } from './bebida-one/bebida-one.component';
import { BebidaTwoComponent } from './bebida-two/bebida-two.component';
import { BebidaThreeComponent } from './bebida-three/bebida-three.component';
import { BebidaFourComponent } from './bebida-four/bebida-four.component';
import { BebidaFiveComponent } from './bebida-five/bebida-five.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { AcompanharPedidosComponent } from './acompanhar-pedidos/acompanhar-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    ListarAperitivosComponent,
    CardapiosComponent,
    FritasComponent,
    CarrinhoComponent,
    EntrarComponent,
    FavoritosComponent,
    BurguerOneComponent,
    BurguerTwoComponent,
    BurguerThreeComponent,
    BurguerFourComponent,
    BurguerFiveComponent,
    CardapioHamburguerComponent,
    PerfilComponent,
    AlteraDadosComponent,
    DeletaContaComponent,
    AperitivoOneComponent,
    AperitivoTwoComponent,
    AperitivoThreeComponent,
    AperitivoFourComponent,
    AperitivoFiveComponent,
    PratosOneComponent,
    PratosTwoComponent,
    PratosThreeComponent,
    PratosFourComponent,
    PratosFiveComponent,
    SobremesaOneComponent,
    SobremesaTwoComponent,
    SobremesaThreeComponent,
    SobremesaFourComponent,
    SobremesaFiveComponent,
    JapaOneComponent,
    JapaTwoComponent,
    JapaThreeComponent,
    JapaFourComponent,
    JapaFiveComponent,
    CardapioPratosComponent,
    CardapioSobremesasComponent,
    CardapioJapaComponent,
    CardapioBebidaComponent,
    BebidaOneComponent,
    BebidaTwoComponent,
    BebidaThreeComponent,
    BebidaFourComponent,
    BebidaFiveComponent,
    CozinhaComponent,
    AcompanharPedidosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AperitivosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
