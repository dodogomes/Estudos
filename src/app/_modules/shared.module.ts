import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    MatDialogModule
  ],
  
  exports: [ToastrModule,NgxSpinnerModule,ModalModule,MatDialogModule]
})
export class SharedModule { }
