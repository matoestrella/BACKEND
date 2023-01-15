import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entity/experiencia';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
url="http://localhost:8080/experiencia/"
 
constructor(private httpClient:HttpClient) { }

//lista 
public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista')
  } 
//por id
  public getById(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
    
  }
  //crear
  public create (experiencia:Experiencia): Observable <any>{
    return this.httpClient.post<any>(this.url + 'create',experiencia);
  } 

    
  public update (experiencia:Experiencia): Observable <any>{
    return this.httpClient.put<any>(this.url + 'update',experiencia);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    
  }


  


}
