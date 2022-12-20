import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
edu:any='';

  constructor(private educacion:DatosService) { }

  ngOnInit(): void {
    this.educacion.getDatos().subscribe(datos=>{
      this.edu=datos.educacion;
    })

}
}
