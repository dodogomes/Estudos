import { Component, computed, inject, Signal, signal } from '@angular/core';
import { FakeJsonServiceService } from './fake-json-service.service';
import { usuario } from './fake-json_interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fake-json-api',
    templateUrl: './fake-json-api.component.html',
    styleUrl: './fake-json-api.component.scss',
    standalone: false
})
export class FakeJsonAPIComponent {
  fakeJsonService: FakeJsonServiceService = inject(FakeJsonServiceService)
  toastr: ToastrService = inject(ToastrService)
  rotas: Router = inject(Router)
  fb: FormBuilder = inject(FormBuilder)
  usuario = new Observable<usuario[]>(); // FORMA 2
  usuarioAdmin = new Observable<usuario[]>()
  resultadoAdmin2: usuario[] = []

  meuForm: FormGroup = new FormGroup({});


  initializeForms() {
    this.meuForm = this.fb.group({
      nome: ['', [Validators.required]],
      idade: [null, [Validators.required]],
      estado: ['', [Validators.required]],
      isAdmin: [false]
    })
  }



  id?: number
  nome?: string
  idade?: number
  estado?: string
  // usuario: usuario[] =[] FORMA 1


  get resultado () {
   return this.usuario = this.fakeJsonService.obterUsuario()
  }

  get resultadoAdmin (){
    return this.usuarioAdmin = this.fakeJsonService.obterUsuarioporAdmin()
  }



  // FORMA2() {
  //   this.usuario = this.fakeJsonService.obterUsuario() // FORMA2 -- FORMA CORRETA
  // }

  cadastrarUsuario() {
    this.fakeJsonService.cadastrarUsuario(this.meuForm.value).subscribe({
      next: () => {
        if (this.meuForm.valid) {
          this.toastr.success('OK')
          this.resultado.subscribe(valor => console.log('valor',valor)
          )
          this.resultadoAdmin
          this.testeValidacaoAdmin2()
        }
      },
      error: () => {
        this.toastr.error('NAO OK')
      }
    })
  }

  deletarUsuario() {
    if (this.id !== 0)
      this.fakeJsonService.deletarUsuario(this.id!).subscribe({
        next:(value) => {
          this.toastr.success('Concluido!')
          this.resultado
          this.resultadoAdmin
        },
      }
      )
  }


  data: any
  private route: ActivatedRoute = inject (ActivatedRoute) // Importa a rota ativa

  ngOnInit() {
    this.testeValidacaoAdmin2()
    this.resultado
    this.resultadoAdmin
    this.testeComputed()
    //  console.log('resultado', this.resultado);
     
    //query params//////////////////////////


    // this.fakeJsonService.obterUsuarioPorID().subscribe((valores) =>{
    //   console.log('isAdmin ',valores);
    // })

    // this.fakeJsonService.obterUsuarioPorID2().subscribe((valores) =>{
    //   console.log('valores ',valores);
    // })

    // this.fakeJsonService.obterUsuarioPorID3().subscribe((valores) => {
    //   console.log('isadmin e id', valores);
    //   this.data = valores
    //   console.log('data obterUsuarioPorID3',this.data);


    // })


    this.fakeJsonService.obterUsuarioPorID4().subscribe(resultado => {
    })


    /////////////////////////////////

    this.initializeForms()
    // this.FORMA2()
    // this.fakeJsonService.obterUsuario().subscribe(valor => { FORMA 1
    //   this.usuario = valor
    // })
    // console.log(`serviço API : ${this.fakeJsonService.api + '/usuarios/'}`);

    this.validacaoAdmin()  
      
  }


  validacaoAdmin() {
    this.fakeJsonService.obterUsuarioporAdmin().subscribe({
      next:(value) => {
    this.resultadoAdmin2 = value.filter((value) => !value.isAdmin );
        const paraAdmin = value.map(value => value.isAdmin)
        this.eadmin.set(paraAdmin)
        console.log('nd', this.eadmin());
        console.log('valores', this.resultadoAdmin2);
      },
    })
  }

  testeValidacaoAdmin2(){
    this.fakeJsonService.obterUsuario().subscribe({
      next: (valores) => {
        const result = valores.filter((a) => !a.isAdmin)
        const mapeamento = valores.map((a) => a.nome)
        valores.forEach(function(a,teste,array){
          if(a.isAdmin)
            console.log('result', result);
            
            console.log(a,teste);
            
            console.log(`o cliente ${a.nome}, posição ${teste} é admin , informações completas : Estado: ${a.estado},${a.idade} anos, identificação: ${a.id} `);     
        })

        
        
      }
    })
  }

  eadmin = signal<any>('');

  testeComputed = computed(() => {
   return this.eadmin()

  })

}

