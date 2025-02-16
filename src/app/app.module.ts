import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { FooterComponent } from './_components/footer/footer.component';
import { InfoClienteComponent } from './_components/info-cliente/info-cliente.component';
import { InfoLivroComponent } from './_components/info-livro/info-livro.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ConsultaClientesComponent } from './_modals/consulta-clientes/consulta-clientes.component';
import { SharedModule } from './_modules/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormsComponent } from './pages/cliente-forms/cliente-forms.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmprestimoComponent } from './pages/emprestimo/emprestimo.component';
import { LivroFormsComponent } from './pages/livro-forms/livro-forms.component';
import { LivroComponent } from './pages/livros/livros.component';
import { ConsultaLivrosComponent } from './_modals/consulta-livros/consulta-livros.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioFormsComponent } from './pages/usuario-forms/usuario-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BaseUiComponent,
    ClientesComponent,
    ClienteFormsComponent,
    LivroComponent,
    LivroFormsComponent,
    EmprestimoComponent,
    InfoLivroComponent,
    ConsultaClientesComponent,
    InfoClienteComponent,
    ConsultaLivrosComponent,
    LoginComponent,
    UsuariosComponent,
    UsuarioFormsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
