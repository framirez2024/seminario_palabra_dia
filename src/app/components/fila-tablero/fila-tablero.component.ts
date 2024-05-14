import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-fila-tablero',
  templateUrl: './fila-tablero.component.html',
  styleUrls: ['./fila-tablero.component.sass']
})
export class FilaTableroComponent {

  public numColumnas: number = 5;
}
