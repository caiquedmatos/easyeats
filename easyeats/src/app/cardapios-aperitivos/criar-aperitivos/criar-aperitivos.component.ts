import { Component, Inject } from '@angular/core';
import { AperitivosModel } from '../aperitivos-shared/aperitivos.model';
import { AperitivosService } from '../aperitivos-shared/aperitivos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-aperitivos',
  templateUrl: './criar-aperitivos.component.html',
  styleUrls: ['./criar-aperitivos.component.css']
})
export class CriarAperitivosComponent {

  public form : FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: AperitivosModel,
    public dialogRef: MatDialogRef<AperitivosModel>,
    public formBuilder: FormBuilder,
    public service: AperitivosService,
  ){
    this.form = this.cadastroForm
  }

  public cadastroForm: FormGroup = this.formBuilder.group({
    id: [null],
    aperitivo: [null],
    ingrediente_1: [null],
    ingrediente_2: [null],
    preco_aperitivo: [null]
  });

  enviarAperitivo(): any {
    this.service.criarAperitivos(this.cadastroForm.value).subscribe((res)=>{
      console.log('aperitivo criado')
    }), location.reload()
  }

}
