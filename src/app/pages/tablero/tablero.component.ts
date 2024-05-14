import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tablero',
	templateUrl: './tablero.component.html',
	styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
	nfilaColumna: number = 5
	palabra: string = ""

	palabras = [
		"aguas", "agudo", "actor", "altar", "ANTES", "amiri", "nadar",
		"lucia", "mario", "matar", "coser", "gozar", "viaja", "cazar", "tener",
		"mover", "salte", "tomar", "pillar", "notar", "casio", "motor", "comer",
		"anexo", "apaga", "amaba", "apoyo", "andar", "ataco", "andan",
		"barco", "lucio", "talla", "mente", "besar", "gucci", "asara", "amara",
	]

	palabrasIntroducidas: string[][] = new Array(this.nfilaColumna).fill(new Array(this.nfilaColumna).fill("")).map(a => a.slice());

	/**
	 * Evalua las celdas
	 * 1) Si la letra esta en la posición correcta
	 * 2) Si la letra pertenece a la palabra pero en la posición incorrecta
	 * 3) Si la letra no pertenece a la palabra
	 */
	// celdasEvaluadas: boolean[][] = new Array(this.nfilaColumna).fill(new Array(this.nfilaColumna).fill(false)).map(a => a.slice());
	celdasEvaluadas: number[][] = new Array(this.nfilaColumna).fill(new Array(this.nfilaColumna).fill(0)).map(a => a.slice());

	letras: string[] = []

	filaActual: number = 0

	constructor() { }

	ngOnInit(): void {
		let random = 0
		let avanza: boolean = false
		do {
			random = Math.round(Math.random() * this.palabras.length)

			if (random < this.palabras.length) {
				avanza = true
				this.palabra = this.palabras[random]
			}

		} while (!avanza)

		this.letras = this.palabras[random].split("")
		console.log(this.letras)
	}

	compararPalabraGanadora() {
		return this.letras.join("") == this.palabrasIntroducidas[this.filaActual].join("")
	}

	validarFilaActualCompleta() {
		let todoLleno = true

		for (let i = 0; i <= this.filaActual; i++) {

			if (this.filaActual < i) continue

			for (let j = 0; j < this.nfilaColumna; j++) {
				if (this.palabrasIntroducidas[i][j] == "") todoLleno = false
			}
		}
		return todoLleno
	}

	validarLetrasFilaActual() {
		let letrasFilaActual = this.palabrasIntroducidas[this.filaActual];

		if (!this.validarFilaActualCompleta()) return;


		for (let i = 0; i < this.letras.length; i++) {
			for (let j = 0; j < letrasFilaActual.length; j++) {

				// Si la letra esta en la misma posición
				if (this.letras[i] == letrasFilaActual[j] && i == j)
					this.celdasEvaluadas[this.filaActual][i] = 1;

				else if (this.letras[i] == letrasFilaActual[j] && this.celdasEvaluadas[this.filaActual][j] != 1)
					this.celdasEvaluadas[this.filaActual][j] = 2
				// else
				// 	this.celdasEvaluadas[this.filaActual][j] = 3
			}
		}

		if (this.compararPalabraGanadora()) {
			alert("Has ganado, la palabra correcta es: " + this.letras.join(""))
			window.location.reload()
		}

		this.filaActual += 1

		if (this.filaActual > (this.letras.length - 1)) {
			alert("Has usado todos los intentos")
			window.location.reload()
		}

		console.log("Letras: ", this.letras)
		console.log("Fila actual: ", letrasFilaActual)
		console.log("Celdas evaluadas: ", this.celdasEvaluadas)
	}

	validarFila(fila: number, columna: number, event: KeyboardEvent) {
		let regex = /^[a-z]+$/

		if (regex.test(event.key)) {
			this.palabrasIntroducidas[fila][columna] = event.key
			this.validarLetrasFilaActual()
		}
	}
}
