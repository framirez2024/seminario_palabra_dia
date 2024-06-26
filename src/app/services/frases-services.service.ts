import { IFrase } from './../Interfaces/ifrase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrasesServicesService {

  private endpoint: string = "/frases";

  constructor(
    private httpClient: HttpClient
  ) { }

  public all(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${this.endpoint}`);
  }
}
