import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseModalEditComponent } from './modulos/base-modal/base-modal-edit/base-modal-edit.component';
import { BaseModalComponent } from './modulos/base-modal/base-modal.component';
import { DropdownComponent } from './_components/dropdown/dropdown.component';

const routes: Routes = [
  {path: '', component: DropdownComponent},
  {path: 'modal', component: BaseModalEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
