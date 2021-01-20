import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeComponent } from './front/cidade/cidade/cidade.component';
import { ClienteComponent } from './front/cliente/cliente/cliente.component';


const routes: Routes = [
  
  // Cidade
  { path: 'cidade', component: CidadeComponent },
  
  // Cliente
  { path: 'cliente', component: ClienteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
