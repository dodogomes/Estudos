import { Component, inject, signal } from '@angular/core';
import { usuario } from '../../_models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-forms',
  standalone: false,

  templateUrl: './usuario-forms.component.html',
  styleUrl: './usuario-forms.component.scss'
})
export class UsuarioFormsComponent {
  public usuario = signal<usuario | null>(null)
  public usuarioForms: FormGroup = new FormGroup({})
  public fb: FormBuilder = inject(FormBuilder)
  private router: Router = inject(Router)

  constructor() {
    const currentNavigation = this.router.getCurrentNavigation()
    console.log(currentNavigation);
    
    if (currentNavigation?.extras.state) {
      this.usuario.set(currentNavigation?.extras.state['usuario']);
    }
  }

  ngOnInit(){
    this.initializeForm()
    const usuario = this.usuario()
    if(usuario){
      this.usuario.set({...usuario, password: ''})
      this.usuarioForms.setValue(this.usuario()!)
    }
  }


  initializeForm() {
    this.usuarioForms = this.fb.group({
      id: [0, [Validators.required]],
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      email: [
        '',
        [Validators.required, Validators.maxLength(250), Validators.email]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ],
      ],
      isAdmin: [false],
    });
  }


}
