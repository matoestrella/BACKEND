import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Persona } from '../Entity/persona';
//importamos el servicio datosservice

import { PersonaService } from '../servicios/persona.service';



@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  persona:Persona[]=[]; 


constructor(private servPersona:PersonaService) { }//en el constructor linyectamos el servicio que es el que esta arriba

  ngOnInit(): void {
    this.cargarPersona()
    
  }
  cargarPersona(){
    this.servPersona.create(Persona).subscribe(datos=>{this.persona=datos })
  }

}
