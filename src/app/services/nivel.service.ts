import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private endpoint: string = "/nivel_dificultad";
  public niveles: string[] = [];

  constructor(
    public httpClient: HttpClient
  ) { }

  all() {
    return this.httpClient.get(`${environment.apiUrl}${this.endpoint}`);
  }

  getById(id: number) {

  }
}
