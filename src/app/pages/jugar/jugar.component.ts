import { Component, OnInit } from '@angular/core';
import { IConfigJuego } from 'src/app/Interfaces/iconfig-juego';
import { IFrase } from 'src/app/Interfaces/ifrase';
import { INivel } from 'src/app/Interfaces/inivel';
import { FrasesServicesService } from 'src/app/services/frases-services.service';

@Component({
    selector: 'app-jugar',
    templateUrl: './jugar.component.html',
    styleUrls: ['./jugar.component.sass']
})
export class JugarComponent implements OnInit {

    public frases: IFrase[] = [];

    public config: IConfigJuego = {
        juegoTerminado: false,
        partidaGanada: false,
        nivel: {
            nivel: 'normal',
            intentos: 6
        },
        intentos: 6,
        modoJuego: 'normal'
    }

    constructor(
        public frasesService: FrasesServicesService
    ) {

    }

    ngOnInit() {
        this.frasesService.all().subscribe((res: IFrase[]) => {
            res.forEach((p: IFrase) => {
                this.frases.push(p);
            });
        });
    }

    cambiarNivel(nivel: INivel): void {

        this.config.nivel = nivel;
    }
}
