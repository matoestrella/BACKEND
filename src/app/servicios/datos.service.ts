import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';//es para suscribirce al servicio
import { HttpClient } from '@angular/common/http';// para hacer peticiones get, that , delete etc, 

@Injectable({
  providedIn: 'root'
})
export class DatosService {
// este es el alias, el primer http el que esta en muinuscula,que dice que va a usar el http client
  constructor(private http:HttpClient) { }
  //creacion del metodo que es obserbavle que nos devolvera los datos de json
  // y se declacra any por que nos puede devolver cualquier cosa
  getDatos():Observable<any> { 

    return this.http.get('./assets/json/datos.json')
    //esto dice  retorname esto de http y traelo de esta direccion
    // es decir trae los datos del json
  }  

}
