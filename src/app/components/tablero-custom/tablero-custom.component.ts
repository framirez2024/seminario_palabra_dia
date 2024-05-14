import { Component, OnInit } from '@angular/core';
import { IConfig } from 'src/app/Interfaces/iconfig';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-tablero-custom',
  templateUrl: './tablero-custom.component.html',
  styleUrls: ['./tablero-custom.component.sass']
})
export class TableroCustomComponent implements OnInit {

  public config: IConfig = {
    intentos: 0,
    tiempoEmpleado: 0,
    puntos: 0
  };

  constructor(
    public sotrageService: StorageServiceService
  ) {

  }
  ngOnInit(): void {
    this.config = this.sotrageService.getConfig();
  }
}
