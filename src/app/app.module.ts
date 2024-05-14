import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './pages/tablero/tablero.component';
import { CasillasComponent } from './component/casillas/casillas.component';
import { FilaComponent } from './component/fila/fila.component';
import { CeldaComponent } from './component/celda/celda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EscogerNivelComponent } from './components/escoger-nivel/escoger-nivel.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { RecordsComponent } from './pages/records/records.component';
import { FilaTableroComponent } from './components/fila-tablero/fila-tablero.component';
import { TableroCustomComponent } from './components/tablero-custom/tablero-custom.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CasillasComponent,
    FilaComponent,
    CeldaComponent,
    EscogerNivelComponent,
    JugarComponent,
    RecordsComponent,
    FilaTableroComponent,
    TableroCustomComponent,
    TemporizadorComponent
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
