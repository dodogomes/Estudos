import { Component, computed, signal } from '@angular/core';
import { Teste } from '../../interfaces/testeInterface';
import { OutraInterface } from '../../interfaces/outrainterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {
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
  protected exemploCount = signal(1)
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
     this.showCount.update(boleano => boleano = false)
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
  constructor(){}

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
      console.log('transformando',transfornado);
      console.log('valores',valors + retornodoId[0].outroteste)
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

ngOnInit(): void {
  console.log(this.variavelFuncao);

// console.log('ofertas = ',this.ofertas);
// console.log('retorno oferta' , this.retornoOferta);
// console.log('retorno teste oferta', this.testeDeOferta);
console.log('funcao com item',this.funcao5(this.variavelFuncao));


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


}






