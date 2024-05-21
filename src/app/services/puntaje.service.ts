import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPosicion } from '../Interfaces/iposicion';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  private endpoint: string = "/posiciones";

  constructor(
    private httpClient: HttpClient
  ) { }

  public all(filter: string = ''): Observable<any> {

    let params: string = filter ?? '';

    return this.httpClient.get(`${environment.apiUrl}${this.endpoint}${params}`);
  }

  public guardar(datos: any): Observable<any> {

    return this.httpClient.post(`${environment.apiUrl}${this.endpoint}`, datos);
  }
}
