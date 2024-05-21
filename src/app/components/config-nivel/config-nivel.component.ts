import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { INivel } from 'src/app/Interfaces/inivel';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-config-nivel',
  templateUrl: './config-nivel.component.html',
  styleUrls: ['./config-nivel.component.sass']
})
export class ConfigNivelComponent implements OnInit {

  @Output() cambioDeNive: EventEmitter<INivel>;
  public niveles: INivel[] = [];

  formularioNivel = new FormGroup({
    nivel: new FormControl('')
  });

  constructor(
    public nivelService: NivelService,
  ) {
    this.cambioDeNive = new EventEmitter<INivel>();
  }

  ngOnInit() {
    this.nivelService.all().subscribe((res: any) => {
      res.forEach((nivel: INivel) => {
        this.niveles.push(nivel);
      });
    })
  }

  agregarNivel() {

    const niveId: string = this.formularioNivel.value.nivel as string;

    const nivel: INivel[] = this.niveles.filter((n: INivel) => n.id === niveId);

    this.cambioDeNive.emit(nivel[0] ?? {});
  }
}
