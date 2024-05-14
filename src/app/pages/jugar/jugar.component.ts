import { Component, OnInit } from '@angular/core';
import { IFrase } from 'src/app/Interfaces/ifrase';
import { FrasesServicesService } from 'src/app/services/frases-services.service';

@Component({
    selector: 'app-jugar',
    templateUrl: './jugar.component.html',
    styleUrls: ['./jugar.component.sass']
})
export class JugarComponent implements OnInit {

    frases: IFrase[] = [];
    palabra: string = "";
    fraseArray: string[] = [];

    constructor(
        public frasesService: FrasesServicesService
    ) {

    }

    ngOnInit(): void {
        this.cargarFrases();
    }

    cargarFrases() {
        this.frasesService.all().subscribe(data => {
            this.frases = data;
            console.log(this.frases)
        });
    }

    seleccionarFrase(): void {

        console.log("Frases.. ", this.frases);
    }
}
