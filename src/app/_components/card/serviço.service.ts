import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Pesquisa } from '../../interfaces/camisa';

@Injectable({
  providedIn: 'root'
})
export class ServiçoService {
  private httpClient: HttpClient = inject (HttpClient)
  api = environment.linkApi

  // obterPesquisa(){
  //   return this.httpClient.get(this.api).pipe(map((result) => {
  //     return result
  //   } ))
  // }


  
      
      obterPesquisaGoogle(query: any){
        var apikey = 'AIzaSyBKz_pbR432ZiV7e_M5yu5oPlyjvzjuUH4'
        var searchEngineID = '0545016e22cb94cf8'
        var searchType = 'image'
        let params1 = new HttpParams()
        let params2 = params1.set('key',apikey).set('cx',searchEngineID).set('q',query).set('searchType', searchType)
        console.log('parametros1', params1.toString());
        
        return this.httpClient.get<Pesquisa>(this.api ,{ params: params2}).pipe(map((result) => {
          return result
        }))
      }

      obterPesquisaGoogle2(query: any){
        var apikey = 'AIzaSyBKz_pbR432ZiV7e_M5yu5oPlyjvzjuUH4'
        var searchEngineID = '0545016e22cb94cf8'
        var searchType = 'image'
        var params = new HttpParams()
        let params1 = params.set('key',apikey).set('cx',searchEngineID).set('q',query).set('searchType', searchType)

        return this.httpClient.get<Pesquisa>(this.api, {params: params1}).pipe(map((result) => {
          return result
        }))
      }



  //  obterUsuario(){
  //     return this.httpClient.get<usuario[]>(this.api).pipe(map((result) =>{
  //       return result
  //     }))
  //   }

}
