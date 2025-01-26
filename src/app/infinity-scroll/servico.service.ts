import { inject, Injectable } from '@angular/core';
import { delay, map, observable, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../_components/fake-json-api/fake-json_interface';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private httpClient : HttpClient = inject(HttpClient)
  apiLink = environment.chaveAPI



  getListaCliente(){
    return this.httpClient.get<usuario[]>(this.apiLink + 'usuarios').pipe(map((result) => {
      return result
    }))
  }


  private totalItems=100;
  getItems(page=1, itemsPerPage=10):Observable<string[]>{
    const startIndex=(page-1)*itemsPerPage
    const endIndex=startIndex+itemsPerPage
    const items=[]
    for(let i=startIndex;i<endIndex;i++){
      if(i<this.totalItems){
        items.push(`item ${i+1}`);
      }

    }
    return of(items).pipe(delay(1000))
  }
  constructor() { }
}
