import { Component, Input, OnInit } from '@angular/core';
import { FilaContentType } from 'src/app/types/Tipos';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
})
export class CasillasComponent implements OnInit {

  @Input() lasletras!: any[]
  @Input() lapalabra!: string

  filas = [1, 2, 3, 4, 5]
  misFilas: FilaContentType[] = [
    {
      numero: 0,
      estaActiva: true
    },
    {
      numero: 1,
      estaActiva: false
    },
    {
      numero: 2,
      estaActiva: false
    },
    {
      numero: 3,
      estaActiva: false
    },
    {
      numero: 4,
      estaActiva: false
    },
  ]

  ngOnInit() {
    console.log("Las letas: ", this.lapalabra)
  }
}
