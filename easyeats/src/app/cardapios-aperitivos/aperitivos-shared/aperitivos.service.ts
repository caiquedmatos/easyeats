import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { AperitivosModel } from './aperitivos.model';

@Injectable({
  providedIn: 'root'
})
export class AperitivosService {

  private API = "http://localhost:3000/";

  constructor( private httpClient:HttpClient ) { }

  listaAperitivos(): Observable<any>{
    return this.httpClient.get<AperitivosModel[]>(`${this.API}lista-aperitivos`).pipe(
      res => res,
      error => error
    )
  }

  criarAperitivos(record: AperitivosModel):Observable<any>{
    return this.httpClient.post<AperitivosModel[]>(`${this.API}lista-aperitivos`, record).pipe(
      first()
    )
  }

  excluirAperitivos(id:number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}lista-aperitivos/${id}`).pipe(
      res => res,
      error => error
    )
  }
}
