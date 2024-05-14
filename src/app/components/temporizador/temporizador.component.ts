import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
	selector: 'app-temporizador',
	templateUrl: './temporizador.component.html',
	styleUrls: ['./temporizador.component.sass']
})
export class TemporizadorComponent implements OnInit {

	horas: number = 0;
	minutos: number = 0;
	segundos: number = 0;

	public cronometroSub: Subscription = new Subscription();

	constructor(
	) {

	}

	ngOnInit(): void {
		this.iniciar()
	}

	iniciar() {
		this.cronometroSub = interval(1000).subscribe(() => {
			if (this.segundos < 59) {
				this.segundos++;
			} else {
				this.segundos = 0;
				if (this.minutos < 59) {
					this.minutos++;
				} else {
					this.minutos = 0;
					this.horas++;
				}
			}
		})
	}

	detener() {
		if (this.cronometroSub) {
			this.cronometroSub.unsubscribe();
		}
	}

	reiniciar() {
		this.horas = 0;
		this.minutos = 0;
		this.segundos = 0;
		this.detener();
	}

	getTiempo() {
		return (this.horas * 3600) + (this.minutos * 60) + this.segundos;
	}
}
