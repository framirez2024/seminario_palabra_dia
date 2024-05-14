import { AfterContentInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { CeldaContentType, FilaContentType } from 'src/app/types/Tipos';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.sass']
})
export class FilaComponent {

  @Input() letras!: any[]
  @Input() palabra!: string
  @Input() fila: FilaContentType = { numero: 0, estaActiva: false }


  celdas = [1, 2, 3, 4, 5]
  misCeldas: CeldaContentType[] = [
    {
      letra: "",
      coincide: false,
      desabilidata: false
    },
    {
      letra: "",
      coincide: false,
      desabilidata: false
    },
    {
      letra: "",
      coincide: false,
      desabilidata: false
    },
    {
      letra: "",
      coincide: false,
      desabilidata: false
    },
    {
      letra: "",
      coincide: false,
      desabilidata: false
    },
  ]

  misLetras = ["", "", "", "", ""]

  celdasLlenas(): boolean {
    let estanLlenas: boolean = true;

    this.misCeldas.map(item => { if (item.letra == "") estanLlenas = false })

    return estanLlenas;

  }

  verificarInputs(pos: number, valor: any) {
    this.misCeldas[pos].letra = valor;

    console.log("post: ", pos, " value: ", valor)
    console.log(this.celdasLlenas())

  }
}
