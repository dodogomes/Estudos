import { Component, inject } from '@angular/core';
import { ServiçoService } from './serviço.service';
import { Observable } from 'rxjs';
import { Pesquisa } from '../../interfaces/camisa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  pesquisaServico : ServiçoService = inject(ServiçoService)
  pesquisa?: string  
  images: { title: string; link: string; thumbnail: string }[] = [];
  resultado =  new Observable<Pesquisa>()
  ngOnInit() {
  }

    botaoPesquisa(){
    this.pesquisaServico.obterPesquisaGoogle2(this.pesquisa).subscribe({
        next:(value: any) => {
          if (value && value.items)
            this.images = value.items.map((value: any) => ({
              title: value.title,
              link: value.link,
              thumbnail: value.image.thumbnailLink
            }))          
        },
      });
    }

  botaoInput(){
    this.resultado = this.pesquisaServico.obterPesquisaGoogle(this.pesquisa)}

}
