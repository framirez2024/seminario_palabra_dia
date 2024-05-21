import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFrase } from 'src/app/Interfaces/ifrase';

@Component({
	selector: 'app-fila-tablero',
	templateUrl: './fila-tablero.component.html',
	styleUrls: ['./fila-tablero.component.sass']
})
export class FilaTableroComponent implements OnInit {

	@Input() frase: IFrase = { frase: "" }
	@Input() indice: number = 0;
	@Input() filaActual: boolean = false;
	@Output() filaGanadora: EventEmitter<boolean>;

	public numColumnas: number = 5;
	public letras: string[] = [];

	public inputs: HTMLInputElement[] = [];

	constructor() {
		this.filaGanadora = new EventEmitter<boolean>();
	}

	ngOnInit(): void {
		this.letras = this.frase.frase.split("");
	}

	estaCompletaLaFila(): boolean {

		let estaCompleta: boolean = true;

		this.inputs.forEach((input: HTMLInputElement) => {
			estaCompleta = input.value !== '';
		})

		return estaCompleta;
	}

	// Verifica si la palabra es igual a al seleccionada aleatoriamente
	comprobarPalabraGanadora() {

		return this.letras.join("") == this.inputs.map((input: HTMLInputElement) => input.value).join("")
	}

	validarFilaCompleta(): boolean {

		this.inputs.forEach((input: HTMLInputElement, j: number) => {
			for (let i = 0; i < this.letras.length; i++) {

				// Se evalua si la celda tiene la posición correcta para que rompa el ciclo
				if (input.getAttribute("data-state") == "1") break;

				if (this.letras[i] == this.inputs[j].value && i == j) {
					input.classList.remove("bg-warning", "bg-secondary")
					input.classList.add("bg-success")
					input.setAttribute('data-state', "1")
				} else if (
					this.letras[i] == this.inputs[j].value &&
					i != j
				) {
					input.classList.add("bg-warning")
					input.setAttribute('data-state', "2")
				} else {
					input.classList.add("bg-secondary")
					input.setAttribute('data-state', "3")
				}
			}

			input.disabled = true
		});

		if (this.comprobarPalabraGanadora()) return true

		return false;
	}

	validarInput(columna: number, event: KeyboardEvent): void {

		// Crear una expresión regular para validar solo texto
		let regex = /^[a-z]+$/

		// Si tiene elementos no cargo los inputs, de lo contrario si los cargos.
		if (this.inputs.length == 0) {
			document.querySelectorAll(".indice_" + this.indice).forEach((element: any) => {
				this.inputs.push(element)
			});
		}

		// Si la fila esta totalmente completada devolvemos true
		if (this.estaCompletaLaFila() && this.validarFilaCompleta()) {
			// Se valida si el usuario ha ganado
			this.filaGanadora.emit(true);
			alert("Ha ganado..!!")
			return;
		} else if (this.estaCompletaLaFila() && !this.validarFilaCompleta()) {
			this.filaGanadora.emit(false);
			return
		}

		// Validar las leytras del teclado
		if (regex.test(event.key) && event.code !== 'Space') {
			this.inputs[columna + 1].focus();
		} else if (event.key == "Backspace" && columna > 0) {
			this.inputs[columna - 1].focus();
		} else {
			this.inputs[columna].value = '';
		}
	}
}
