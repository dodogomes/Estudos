import { AfterViewInit, Component, computed, inject, Output, Signal, signal, TemplateRef } from '@angular/core';
import { Teste } from '../../interfaces/testeInterface';
import { OutraInterface } from '../../interfaces/outrainterface';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ConteudoServiçoService } from './conteudo-serviço.service';
import { Cep } from '../../interfaces/CEP';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateComponent } from '../template/template.component';
import { filter, interval, map, pipe } from 'rxjs';
declare var bootstrap: any; // Declaração global do Bootstrap
@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent implements AfterViewInit {

  private serivco: ConteudoServiçoService = inject(ConteudoServiçoService)
   private toastr: ToastrService = inject(ToastrService)


  tipo: string =  ''
  //cep!: number







//SIGNALS/////////////////////
  executar(){
    // set: define o signal para um novo valor absoluto --------------------
    // this.exemploSinal.set('alteração') // <--- alteração do valor do signal
    //this.exemploCount.set(20) <--- setar 20


    // update: define o signal com base no valor atual ----------------------



    // this.exemploSinal.update((oldvalue) => {
    //   console.log('old',oldvalue);

    //   switch (oldvalue) {
    //     case 'Douglas':
    //       alert('alerta');

    //       break;

    //     default:
    //       break;
    //   }
    //   return 'alteração'
    // })

    this.exemploCount.update((atual) => atual + 1)

    // this.exemploCount.update(teste => {
    //   return {...teste, nome: 'oliveira', idade: 30 }
    // }) /// (variavel => variavel(exemploCount + 50) - simule sem o this.exemplocount.set())
    // this.exemploCount.update(teste => {
    //   return {...teste , idade: 30} //...teste <-- todos os atributos
    // })

    // Mutate: define o signal com base no valor atual sem obj total
    //this.exemploCount.mutate(atual => atual.nome = 'cris')
  }
  protected sinal2 = signal('')
  protected exemploCount = signal(1)
  protected atualização = signal(5)
  protected sinal = signal(1)
  protected observavel$  = toObservable(this.exemploCount)
  protected paraOsignal = toSignal(this.observavel$)
  protected exemploSinal = signal('douglas')
  protected exemploBoolean = signal(true)
  protected computedExemplo = computed(() => {
    console.log('computed acionado');
      if(this.showCount())
    return `${this.exemploCount()} computed!`
      else
        return 'NADA'

  })

  falso(){
     this.showCount.update(boleano => !boleano)
  }
 protected showCount = signal(true)

  valor = 10
  arrays(){
    this.array.update((oldvalue) =>{
      return oldvalue
    })
  }

  public array = signal([1])
////////////////////////////////////
  ofertas: Teste[] = [
    {
    testando: 'cada',
    outroteste: 2000
    },
    {
      testando: 'cada',
      outroteste: 5
      },
      {
        testando: 'cada',
        outroteste: 5
        },
        {
          testando: 'cada',
          outroteste: 5
          }
  ]



  testeDeOferta = this.ofertas.map(({}) => ({}))


    exemplo: Array<OutraInterface> = [
      {
        id: {
          testando: 'string',
          outroteste: 5
        },
        valores: 5
      }
    ]

    variavelFuncao: any

    funcao5(valors: number){
      var retornodoId = this.exemplo.map(({id}) => id )
      const transfornado = {
        id: retornodoId[0]
      }
      if(valors >= 0){
      valors + retornodoId[0].outroteste
      // console.log('transformando',transfornado);
      // console.log('valores',valors + retornodoId[0].outroteste)
      }
    }

   oferta: Array<any> = [
    {
      id: 1007,
      campanhaEstagiosTarefasId: 680,
      codigoDinamica: "REG",
      dadosOferta: {
        ofertaValida: {
          valorOferta: 2.99,
          valorOriginal: 6.99
        },
        gestaoOfertas: {
          ordem: 3,
          pagina: 1,
          valorSellout: 0
        },
        produtoPrincipal: {
          codigoBarras: "7894650939048",
          produtoCodigo: "4644",
          produtoUrlImagem: "https://s3.amazonaws.com/pricefy-stage/Produtos/9d5ea690-1f80-4d42-8bbc-64b80d8664ff/imagens/42660ad-1836-pastel.png",
          produtoApresentacao: "yrtytyt",
          produtoUrlImagemThumbnail: "https://s3.amazonaws.com/pricefy-stage/Produtos/9d5ea690-1f80-4d42-8bbc-64b80d8664ff/imagens/42660ad-1836-pastel.png?thumbnail",
          produtoDescricaoPrincipalCartaz: "Odorizador de Ambiente Toque de Maciez Glade Frasco 360ml",
          produtoDescricaoSecundariaCartaz: "ghjgjghjgdsa"
        }
      },
      produtoId: 1836,
      responsavelId: 13102,
      gtin: "7894650939048"
    }
]

retornoOferta = this.oferta.map(({dadosOferta}) => dadosOferta)


mapa = ['1.5','2.4','3.2']
funcao(value: number){
  return value >= 10
}

valorUnico?: any

cep: Cep =
  {
  format: 'json',
  cep: '04814730'
}

private modal: BsModalService = inject(BsModalService)

modalRef: BsModalRef = inject (BsModalRef)
resultado = signal('')
introduzindoValor?: string

openModal(template: TemplateRef<any>) {
   this.modalRef = this.modal.show(template);
}

setValue(){
  if(this.introduzindoValor !== undefined){
  this.resultado.set(this.introduzindoValor)
  this.modal.hide()
  }
  else this.toastr.error('insira o valor corretamente')

}


funcaoInjecao(){
  this.serivco.buscarApi(this.cep).subscribe({
    next: (valor: any) =>{
      this.toastr.success(valor.cep, 'OLH A O CEP')


    },
    error: (valor: any) =>{
      this.toastr.error( valor.error.message, 'final', {
        timeOut: 3000,
      });
      console.log(valor);

    }
  })
}
isInteger: number = 2
isString: String = 'meunome'
ngOnInit(): void {

  console.log('é inteiro', this.isInteger.toString());


  console.log('Valor inicial de exemploCount:', this.exemploCount());
  console.log('para sinal' ,this.paraOsignal());


  // console.log(this.variavelFuncao);

// console.log('ofertas = ',this.ofertas);
// console.log('retorno oferta' , this.retornoOferta);
// console.log('retorno teste oferta', this.testeDeOferta);
// console.log('funcao com item',this.funcao5(this.variavelFuncao));


const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

var fruits2 = fruits.slice(1)
console.log('fruits',fruits2);

const exempo: OutraInterface = {
  id: {
    testando: 'string',
    outroteste: 5
  },
  valores: 5
}

console.log('interface com interface', exempo);


//console.log(this.mapa);
  const mapa = {

    dadosOferta: this.retornoOferta[0]
  }

var teste = mapa.dadosOferta
console.log('olha o teste' ,teste);



  const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "a", // ignored by filter() since length is 3
  };

  console.log('aquioh' ,Array.prototype.filter.call(this.oferta, (x) => x));




const filtered= [12,5,7,130,44].filter(this.funcao)
//console.log('filtro ' + filtered);



  const mapeando = this.mapa.map((teste) => parseFloat(teste).toFixed(0))
  // const teste2 = this.mapa.map(Number).toString()
  const teste3 = [1,2,3,4]
  const filteredNumbers = teste3.map((string, valores) =>{
    if (valores <= 4){
      return string
    }
    return
  })
  console.log('filtro de string para numeros: ' ,filteredNumbers);
  console.log('mapeando', mapeando);

  // console.log('olha o teste 2' ,teste2)

  //




  this.oferta.map((argumentos) => {
    this.variavel = argumentos.dadosOferta.ofertaValida.valorOferta
    this.variavel = this.oferta




  });




}

variavel?: any

outrovalor: number = 2+2
receberSinal(valor: number) {
  if(valor === 5){
    valor = this.outrovalor
    console.log(valor);
  }
  else console.log(valor);



}

public mandandoSinal = signal('texto')


introduzindoValor2: string = '';
  lista: string[] = [];
  modalService: BsModalService = inject(BsModalService)

  constructor() {

  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  adicionarItem() {
    if (this.introduzindoValor2.trim()) {
      this.lista.push(this.introduzindoValor2.trim());
      this.introduzindoValor2 = '';
      console.log(`esta é a lista ${this.lista}`);

    }
  }

  removerItem(index: number) {
    this.lista.splice(index, 1);
  }



  ngAfterViewInit(): void {
    const dropdownElement = document.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownElement) {
      new bootstrap.Dropdown(dropdownElement); // Inicializa corretamente o dropdown
    }
  }

  abrindoModal(){
    this.modalRef = this.modalService.show(TemplateComponent,{
      class: 'modal-lg'
    })
  }

 // valor2 = interval(1000).pipe(filter((value) => value % 2 === 0)) // -------------------- filter
  valor3 = interval(1000).pipe(map((valor) => `${valor} * 2 = ${valor * 2}`))

  valor4 = interval(2000).pipe(map((resultado) => `${resultado} * ${this.valor2} = ${ resultado * this.valor2}` ))

  subscriberss = this.valor4.subscribe({
    next: (valor) =>
    {
      console.log(valor);

    }
  })

valor2: number = 30
outrovalor5: number = 10
  // inserindoSubscriber = this.valor2.subscribe(valor =>{
  //   this.toastr.success(`${valor}`)

  // })


  value2: number = 0


   number = [1,2,3]
   doubled = this.number.map((num)=> num * 2)
   resultado5 = this.doubled


  arrayx = [1,2,3]
  testeArray = pipe(map((valor: Array<any> = [1,2,3]) => valor = this.arrayx   ))
  resultado6 = this.testeArray
// então map faz a troca dos valores


}
