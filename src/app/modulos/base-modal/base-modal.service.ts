import { inject, Injectable } from '@angular/core';
import { usuario } from '../../_components/fake-json-api/fake-json_interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseModalService {
   httpClient: HttpClient = inject(HttpClient)
   api = `${environment.chaveAPI}usuarios`

 obterUsuario(){
    return this.httpClient.get<usuario[]>(this.api).pipe(map((result) =>{
      return result
    }))
  }


    cadastrarUsuario(usuario: usuario[]): Observable<usuario[]>{
      return this.httpClient.post<usuario[]>(this.api + '/' , usuario).pipe(map((result)=>{
        return result
      }))
    }
}
