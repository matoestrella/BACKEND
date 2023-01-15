import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entity/experiencia';
import { Educacion } from '../Entity/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url="http://localhost:8080/educacion/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista')
  } 
//por id
  public getById(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
    
  }
  //crear
  public create (educacion:Educacion): Observable <any>{
    return this.httpClient.post<any>(this.url + 'create',educacion);
  } 

    
  public update (educacion:Educacion): Observable <any>{
    return this.httpClient.put<any>(this.url + 'update',educacion);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    
  }



}
