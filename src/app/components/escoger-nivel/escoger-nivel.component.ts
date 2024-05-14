import { IConfig } from './../../Interfaces/iconfig';
import { INivel } from './../../Interfaces/inivel';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { NivelService } from 'src/app/services/nivel.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-escoger-nivel',
  templateUrl: './escoger-nivel.component.html',
  styleUrls: ['./escoger-nivel.component.sass']
})
export class EscogerNivelComponent implements OnInit {

  public niveles: INivel[] = [];
  public config: IConfig = {};

  formularioNivel = new FormGroup({
    nivel: new FormControl('')
  });

  constructor(
    public nivelService: NivelService,
    public storageService: StorageServiceService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.nivelService.all().subscribe((res: any) => {
      res.forEach((nivel: INivel) => {
        this.niveles.push(nivel);
      });
    })
  }

  agregarNivel() {
    this.config = this.storageService.getConfig();
    this.config.intentos = Number(this.formularioNivel.value.nivel);

    console.log(this.storageService.updateConfigItem(this.config));
    this.router.navigate(['jugar']);
  }
}
