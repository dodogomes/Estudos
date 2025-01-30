import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './_components/conteudo/conteudo.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './_components/template/template.component';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ConsumindoAPIComponent } from './_components/consumindo-api/consumindo-api.component';
import { FakeJsonAPIComponent } from './_components/fake-json-api/fake-json-api.component';
import { errorInterceptor } from './interceptors/error-interceptor.interceptor';
import { LojaComponent } from './modulos/loja/loja.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CardComponent } from './_components/card/card.component';
import { DropdownComponent } from './_components/dropdown/dropdown.component';
import { Dropdown2Component } from './_components/dropdown2/dropdown2.component';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
import { BaseModalComponent } from './modulos/base-modal/base-modal.component';
import { BaseModalEditComponent } from './modulos/base-modal/base-modal-edit/base-modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
    TemplateComponent,
    ConsumindoAPIComponent,
    FakeJsonAPIComponent,
    LojaComponent,
    NavbarComponent,
    FooterComponent,
    BaseUiComponent,
    CardComponent,
    DropdownComponent,
    Dropdown2Component,
    InfinityScrollComponent,
    BaseModalComponent,
    BaseModalEditComponent,
  ],
  imports: [
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    JsonPipe,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDropdownModule,
    InfiniteScrollDirective
  ],
  providers: [provideAnimations(), provideHttpClient() ,BsModalService,AlertConfig, BsDatepickerConfig, BsDropdownConfig, 
    provideHttpClient(withInterceptors([errorInterceptor])),

],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
