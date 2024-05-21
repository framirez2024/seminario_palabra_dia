import { INivel } from "./inivel";

export interface IConfigJuego {
    juegoTerminado: boolean,
    partidaGanada: boolean,
    nivel?: INivel,
    intentos: number,
    modoJuego: string
}
