import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LivroComponent } from './pages/livros/livros.component';
import { ClienteFormsComponent } from './pages/cliente-forms/cliente-forms.component';
import { LivroFormsComponent } from './pages/livro-forms/livro-forms.component';
import { EmprestimoComponent } from './pages/emprestimo/emprestimo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cliente', component: ClientesComponent},
  {path: 'cliente/create', component: ClienteFormsComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'livro/create', component: LivroFormsComponent},
  {path: 'emprestimo', component: EmprestimoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
