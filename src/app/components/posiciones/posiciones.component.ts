import { Component, OnInit } from '@angular/core';
import { IPosicion } from 'src/app/Interfaces/iposicion';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.sass']
})
export class PosicionesComponent implements OnInit {

  public puntuaciones: IPosicion[] = [];

  constructor(
    private puntajeService: PuntajeService
  ) {

  }

  ngOnInit(): void {

    this.puntajeService.all('?_sort=tiempo_empleado&_limit=5').subscribe(
      (res: IPosicion[]) => {
        res.forEach((p: IPosicion) => {
          this.puntuaciones.push(p);
        })
      }
    )
  }
}
