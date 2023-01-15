import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entity/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="http://localhost:8080/persona/"

  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista')
  } 
//por id
  public getById(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `detail/${id}`);
    
  }
  //crear
  public create (persona:Persona): Observable <any>{
    return this.httpClient.post<any>(this.url + 'create',persona);
  } 

    
  public update (persona:Persona): Observable <any>{
    return this.httpClient.put<any>(this.url + 'update',persona);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    
  }
}
