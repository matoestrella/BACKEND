import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit { 
  job:any='';
  
  constructor(private trabajo:DatosService) { }

  ngOnInit(): void {
    this.trabajo.getDatos().subscribe(datos=>{//  aca me subcribo al json
          this.job=datos.trabajos;// y traigo los datos del json y se los asignos a las variables de arriba
    })
  }

}
