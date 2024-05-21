import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugarComponent } from './pages/jugar/jugar.component';

const routes: Routes = [
  { path: "", component: JugarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
