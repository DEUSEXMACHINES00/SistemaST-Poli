import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Matricula } from '../models/matricula';
import { Global} from './global'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  public url!:string;

  constructor(
    private _http : HttpClient
  ) { 
    this.url = Global.url;
  }

  getMatricula(placa : any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"matricula/"+placa,{headers:headers});
  }

  getMatriculas(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"matriculas",{headers:headers});
  }

  eliminarMatricula(placa: any ): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.delete(this.url+"matricula/"+placa,{headers:headers});
  }

  guardarMaTricula( matricula: Matricula): Observable<any>{
    
    let params = JSON.stringify(matricula);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.post(this.url+'guardar-matricula', params, {headers: headers});
  }

  actualizarMaTricula( matricula: Matricula): Observable<any>{
    
    let params = JSON.stringify(matricula);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.put(this.url+'matricula/'+matricula.placa, params, {headers: headers});
  }

}
