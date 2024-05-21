import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JugarComponent } from './pages/jugar/jugar.component';
import { FilaTableroComponent } from './components/fila-tablero/fila-tablero.component';
import { TableroCustomComponent } from './components/tablero-custom/tablero-custom.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ConfigNivelComponent } from './components/config-nivel/config-nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    JugarComponent,
    TableroCustomComponent,
    TemporizadorComponent,
    FilaTableroComponent,
    PosicionesComponent,
    ConfigNivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
