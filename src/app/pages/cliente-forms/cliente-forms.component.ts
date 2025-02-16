import { Component, inject, input, InputSignal, signal } from '@angular/core';
import { Cliente } from '../../_models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-forms',
  standalone: false,
  templateUrl: './cliente-forms.component.html',
  styleUrl: './cliente-forms.component.scss'
})
export class ClienteFormsComponent {
  private fb: FormBuilder = inject(FormBuilder)
  public cliente = signal<Cliente[]>([])
  router = inject(Router)
  public clientForms: FormGroup = new FormGroup({})


  initializeForms(){
   this.clientForms = this.fb.group({
    id: [null],
    cliCPF: [null,[Validators.required,Validators.minLength(11)]],
    cliNome: ['',[Validators.required,Validators.minLength(200)]],
    cliEndereco: ['',[Validators.required,Validators.minLength(50)]],
    cliCidade: ['',[Validators.required,Validators.minLength(50)]],
    cliBairro: ['',[Validators.required, Validators.minLength(50)]],
    cliNumero: ['',[Validators.required, Validators.minLength(50)]],
    cliTelefoneCelular: ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    cliTelefoneFixo: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
   })
  }

  ngOnInit(){
    this.initializeForms()
;
    if(this.cliente()){
      this.clientForms.setValue(this.cliente())
    }
  }
  constructor(){
    const currentNavigation = this.router.getCurrentNavigation()
    if(currentNavigation?.extras.state){
      this.cliente.set(currentNavigation?.extras.state['cliente']);
    }
  }


  

}




// id: number;
// cliCPF: string;
// cliNome: string;
// cliEndereco: string;
// cliCidade: string;
// cliBairro: string;
// cliNumero: string;
// cliTelefoneCelular: string;
// cliTelefoneFixo: string;