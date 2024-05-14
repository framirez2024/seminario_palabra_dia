import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CeldaContentType } from 'src/app/types/Tipos';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.sass']
})
export class CeldaComponent {

  @Input() input: CeldaContentType = { letra: "", coincide: false, desabilidata: false };
  @Output() estaLleno = new EventEmitter<string>();

  opcion: string = ""
  full: boolean = false
  habilitado: boolean = false


  verificar(event: KeyboardEvent) {
    if (this.opcion.length > 0) {
      this.full = true
      this.estaLleno.emit(this.opcion)
    } else {
      this.estaLleno.emit("")
    }
  }
}


