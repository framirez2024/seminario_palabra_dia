import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
	selector: 'app-temporizador',
	templateUrl: './temporizador.component.html',
	styleUrls: ['./temporizador.component.sass']
})
export class TemporizadorComponent implements OnChanges {

	@Input() estado: boolean = true;
	@Output() tiempoEmpleado: EventEmitter<number>;

	horas: number = 0;
	minutos: number = 0;
	segundos: number = 0;
	time: number = 0;

	public cronometroSub: Subscription = new Subscription();
	public intervalId: any

	constructor(
	) {
		this.tiempoEmpleado = new EventEmitter<number>();
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.estado = changes['estado'].currentValue;
		this.toggleCronometro();
	}

	toggleCronometro(): void {

		if (this.estado) {
			this.iniciar();
		} else {
			console.log("Vamos a detener")
			this.detener();
			this.tiempoEmpleado.emit(this.time);
		}
	}

	iniciar() {
		this.intervalId = setInterval(() => {
			this.time += 1

			this.horas = Math.floor(this.time / 3600);
			this.minutos = Math.floor((this.time % 3600) / 60);
			this.segundos = this.time % 60;
		}, 1000)
	}

	detener() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
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
