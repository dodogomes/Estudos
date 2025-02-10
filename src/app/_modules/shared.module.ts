import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    MatDialogModule
  ],
  
  exports: [ToastrModule,NgxSpinnerModule,ModalModule]
})
export class SharedModule { }
