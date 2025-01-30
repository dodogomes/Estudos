import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacadeService } from '../facade.facade';

@Component({
  selector: 'app-base-modal-edit',
  standalone: false,
  templateUrl: './base-modal-edit.component.html',
  styleUrl: './base-modal-edit.component.scss'
})
export class BaseModalEditComponent {

  readonly fakeJsonFacade: FacadeService = inject(FacadeService)
  private fb: FormBuilder = inject(FormBuilder)
  usuariosGroup: FormGroup = new FormGroup({})

  initializeForms(){
    this.usuariosGroup = this.fb.group({
      nome : ['',Validators.required],
      idade : [null, Validators.required],
      estado: ['',Validators.required],
      isAdmin: [false,Validators.required]
    })
  }

  incluirUsuario(){
    this.fakeJsonFacade.createUsuario(this.usuariosGroup.value)
  }


  ngOnInit(){
    this.initializeForms()
    
  }






  back(){
    window.history.back()
  }

}
