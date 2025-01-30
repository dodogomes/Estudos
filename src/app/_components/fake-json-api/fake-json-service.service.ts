import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { usuario } from './fake-json_interface';

@Injectable({
  providedIn: 'root'
})
export class FakeJsonServiceService {
  httpClient: HttpClient = inject(HttpClient)
  api = `${environment.chaveAPI}usuarios`

//GET esperando usuario//
  obterUsuario(){
    return this.httpClient.get<usuario[]>(this.api).pipe(map((result) =>{
      return result
    }))
  }

  obterUsuarioporAdmin(){
    return this.httpClient.get<usuario[]>(this.api ,{params : {'isAdmin': true}}).pipe(map((result) =>{
      return result
    }))
  }

    //busca com parametros | HTTPPARAMS /////////////////////////
    // obterUsuarioPorID(){
    //   const parametros = new HttpParams()
    //   let params = parametros.set("isAdmin", true )
    //   console.log('params para string: ',params.toString());
    //   return this.httpClient.get<usuario[]>(this.api , {params}).pipe(map((result) => {
    //     return result
    //   }))
    // }

    // obterUsuarioPorID2(){
    //   const parametros = new HttpParams()
    //   let params = parametros.set('id', '6e23' )
    //   return this.httpClient.get<usuario[]>(this.api , {params : {id: '6e23'}}).pipe(map((result) => {
    //     return result
    //   }))
    // }

    // obterUsuarioPorID3(){
    //   const parametros = new HttpParams()
    //   let params1 = parametros.set('id', 'f115' )
    //   return this.httpClient.get<usuario[]>(this.api ,{ params : params1.set('isAdmin', 'true')}).pipe(map((result) => {
    //     return result 
    //   }))
    // }


    
    obterUsuarioPorID4(){
      let params1 = new HttpParams()
      let params2 = params1.set('id', 'c0b2' )
      let params3 = params1.get('estado')
      // let params4 = params1.append('isAdmin')
      console.log('parametros1', params1.toString());
      console.log('parametros2', params2.toString());
      // console.log('parametros3', params3.toString());

      
      return this.httpClient.get<usuario[]>(this.api ,{}).pipe(map((result) => {
        return result 
      }))
    }

  //POST de usuario//
  cadastrarUsuario(usuario: usuario[]): Observable<usuario[]>{
    return this.httpClient.post<usuario[]>(this.api + '/' , usuario).pipe(map((result)=>{
      return result
    }))
  }

  //DELETE de usuario//
  deletarUsuario(idUsuario: number){
    return this.httpClient.delete<usuario[]>(this.api + '/' + idUsuario).pipe(map((result) =>{
      return result
    }))
  }


  
  // fazerLogin(login: usuario) {
  //   return this.httpClient.post<any>(this.api + 'usuario/login', login).pipe(
  //     map((response: UserToken) => {
  //       if (response) {
  //         localStorage.setItem('user', JSON.stringify(response));
  //         this.setUsuarioAtual(response);
  //       }
  //       return response;
  //     })
  //   );
  // }
}
