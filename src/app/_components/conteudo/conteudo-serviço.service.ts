import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../../interfaces/CEP';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConteudoServiçoService {
  chaveApi = environment.apiKey
  constructor(private httpClient : HttpClient) { }



  buscarApi(cep: Cep) {
    return this.httpClient.get<Cep>(`${this.chaveApi}${cep.format}` + '/' + `${cep.cep}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}


