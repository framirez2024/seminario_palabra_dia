import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './pages/tablero/tablero.component';
import { EscogerNivelComponent } from './components/escoger-nivel/escoger-nivel.component';
import { JugarComponent } from './pages/jugar/jugar.component';

const routes: Routes = [
  { path: "", component: EscogerNivelComponent },
  { path: "jugar", component: JugarComponent }
  // { path: "", component: TableroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
