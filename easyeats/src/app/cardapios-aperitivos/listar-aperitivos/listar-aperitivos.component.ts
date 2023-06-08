import { Component } from '@angular/core';
import { AperitivosModel } from '../aperitivos-shared/aperitivos.model';
import { AperitivosService } from '../aperitivos-shared/aperitivos.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarAperitivosComponent } from '../criar-aperitivos/criar-aperitivos.component';

@Component({
  selector: 'app-listar-aperitivos',
  templateUrl: './listar-aperitivos.component.html',
  styleUrls: ['./listar-aperitivos.component.css']
})
export class ListarAperitivosComponent {

  public listaAperitivos: AperitivosModel | any;

  constructor(
    private service: AperitivosService,
    public dialog: MatDialog
  ){}

  aperitivos = [
    {
      imagem: '../../../assets/imagens/aperitivos/1-1.png',
      nome: 'Joelho Eats',
      descricao: 'Joelho mas não é de verdade',
      preco: 'R$ 8,99',
      link: '../aperitivo-one'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/2-1.png',
      nome: 'Entradine Eats',
      descricao: 'Pão e uns negócios',
      preco: 'R$ 10,86',
      link: '../aperitivo-two'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/3-1.png',
      nome: 'SalamEats',
      descricao: 'Salame e uns negócios',
      preco: 'R$ 13,13',
      link: '../aperitivo-three'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/4-1.png',
      nome: 'Bolim de Eats',
      descricao: 'Bolinho e queijo (Unidade)',
      preco: 'R$ 4,20',
      link: '../aperitivo-four'
    },
    {
      imagem: '../../../assets/imagens/aperitivos/5-1.png',
      nome: 'Kibe Eats',
      descricao: 'Pouca carne e muito trigo de quibe',
      preco: 'R$ 5,93',
      link: '../aperitivo-five'
    },
  ];

  ngOnInit():void{
    this.service.listaAperitivos().subscribe(
      res => this.listaAperitivos = res,
      error => error
    )
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(CriarAperitivosComponent);
  }

  onDelete(id: number){
    this.service.excluirAperitivos(id).subscribe(
      res => {
        this.listaAperitivos = this.listaAperitivos.filter()
      },
      error => error
    ), location.reload()
  }

}
