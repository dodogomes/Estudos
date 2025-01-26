import { Component, inject } from '@angular/core';
import { ServicoService } from './servico.service';
import { Observable } from 'rxjs';
import { usuario } from '../_components/fake-json-api/fake-json_interface';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrl: './infinity-scroll.component.scss'
})
export class InfinityScrollComponent {
  private servico : ServicoService = inject(ServicoService)

  resultadoClientes = new Observable<usuario[]>();


 

  items: string[] = []
  isLoading=false
  currentPage=1
  itemsPerPage=10

  toggleLoading = () => this.isLoading=!this.isLoading

  loadData = () => {
    this.toggleLoading()
    this.servico.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next: (response) =>{
        this.items = response
      },
      error: (err) =>{
        console.log(err); 
      },
      complete: () => {
        this.toggleLoading();
      }
    })
  }


  ngOnInit(){
    this.resultadoClientes = this.servico.getListaCliente()

    this.loadData()
  }


  // this method will be called on scrolling the page

  appendData = () => {
    this.toggleLoading();
    this.servico.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next: (value) => {
       this.items = [...this.items,...value]     
      },
      error: (err) =>{
        console.log(err); 
      },
      complete: () => {
        this.toggleLoading();
      }
    })
  }

  onScroll = () => {
    this.currentPage++;    
    this.appendData();
  }




}
