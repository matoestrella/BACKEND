import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
//importamos el servicio datosservice
import { DatosService } from '../servicios/datos.service';



@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
dx:any='';
 //se crea esta var que aca se guardaran los dx que se traigan 
nombre:string='';
apellido:string='';
descripcion:string='';
titulo:string='';


constructor(private datosService: DatosService) { }//en el constructor linyectamos el servicio que es el que esta arriba

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos=>{//  aca me subcribo al json
     // y traigo los datos del json y se los asignos a las variables de arriba
      this.dx=datos;
      this.nombre=datos.nombre;
      this.apellido=datos.apellido;
      this.descripcion=datos.descripcion;
      this.titulo=datos.titulo;

    })
  }

}
