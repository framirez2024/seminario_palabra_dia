import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IConfigJuego } from 'src/app/Interfaces/iconfig-juego';
import { IFrase } from 'src/app/Interfaces/ifrase';
import { IPosicion } from 'src/app/Interfaces/iposicion';
import { PuntajeService } from 'src/app/services/puntaje.service';

@Component({
  selector: 'app-tablero-custom',
  templateUrl: './tablero-custom.component.html',
  styleUrls: ['./tablero-custom.component.sass']
})
export class TableroCustomComponent implements OnInit, OnChanges {

  @Input() frases: IFrase[] = [];
  @Input() configJuego: IConfigJuego = {
    juegoTerminado: false,
    partidaGanada: false,
    nivel: {
      intentos: 0,
      nivel: ''
    },
    intentos: 0,
    modoJuego: ''
  };

  public frase: IFrase = { frase: "" };
  public filaActual: number = 0;

  public mejoresPosiciones: IPosicion[] = [];

  constructor(
    public puntajeService: PuntajeService
  ) {

  }

  ngOnInit(): void {
    this.puntajeService.all('?_sort=tiempo_empleado&_limit=5').subscribe(
      (res: IPosicion[]) => {
        res.forEach((p: IPosicion) => {
          this.mejoresPosiciones.push(p);
        })
      }
    )

    this.frase = this.frases[Math.round(Math.random() * this.frases.length)];

    console.log(this.frase)
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.configJuego = changes['configJuego'].currentValue;
  }

  validarFila(evt: boolean): void {

    console.log(evt)

    if (evt) {
      this.configJuego.juegoTerminado = true;
      this.configJuego.partidaGanada = true;

    } else {
      this.filaActual++;
    }



    if (this.filaActual == this.configJuego.nivel?.intentos) {
      alert("Has agotado todos los intentos");
      this.configJuego.juegoTerminado = true;
      this.configJuego.partidaGanada = false;
    }
  }

  verificarPuntaje(tiempo: number): boolean {

    let califica: boolean = false;

    if (this.mejoresPosiciones.length < 5) return true;

    this.mejoresPosiciones.forEach((p: IPosicion) => {
      if (tiempo < p.tiempo_empleado) {
        califica = true
      }
    })

    return califica;
  }

  validarPuntuacion(tiempo: number): void {

    console.log(this.verificarPuntaje(tiempo))

    if (this.configJuego.partidaGanada && this.verificarPuntaje(tiempo)) {
      let correo: string = prompt("FELICIDADES!!\nSu puntaje esta entre los 5 mejores\nPor favor ingrese su correo electronico") as string;

      this.puntajeService.guardar({ correo: correo, tiempo_empleado: tiempo }).subscribe(
        (res: any) => {
          console.log(res)
        }
      )
    }

  }
}
