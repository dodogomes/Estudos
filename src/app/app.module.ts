import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './_components/conteudo/conteudo.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
