import { IConfig } from './../Interfaces/iconfig';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private localStorageKey = 'config';
  private config: IConfig = {};

  constructor() { }

  getConfig(): IConfig {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '{}') as IConfig;
  }

  updateConfigItem(config: IConfig): void {

    this.config = config;

    localStorage.setItem(this.localStorageKey, JSON.stringify(this.config));
  }
}
