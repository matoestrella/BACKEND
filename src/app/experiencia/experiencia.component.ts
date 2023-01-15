import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../Entity/experiencia';
import { DatosService } from '../servicios/datos.service';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit { 
 
  experiencia:Experiencia[]=[];
  
  constructor(private serviEXpe:ExperienciaService) { }

  ngOnInit(): void {
    
  }
 
  cargarExperiencia():void{
    this.serviEXpe.lista().subscribe(data=> {this.experiencia=data});
  } 

}
