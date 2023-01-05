import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyect:any;

  constructor(private proyecto:DatosService) { }

  ngOnInit(): void {
    this.proyecto.getDatos().subscribe(datos=>{//  aca me subcribo al json
      this.proyect=datos.proyecto;// y traigo los datos del json y se los asignos a las variables de arriba
     
})
  }

}
