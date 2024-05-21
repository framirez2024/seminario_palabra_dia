import { IConfig } from './../Interfaces/iconfig';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private localStorageKey = 'config';
  private config: IConfig = {
    intentos: 0,
    puntos: 0,
    tiempoEmpleado: 0
  };

  constructor() { }

  getConfig(): IConfig {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '{}') as IConfig;
  }

  updateConfigItem(config: IConfig): void {

    this.config = config;

    localStorage.setItem(this.localStorageKey, JSON.stringify(this.config));
  }
}
