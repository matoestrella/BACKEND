import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/Entity/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-m-estudios',
  templateUrl: './m-estudios.component.html',
  styleUrls: ['./m-estudios.component.css']
})
export class MEstudiosComponent implements OnInit {

  form: FormGroup;

    
  institucion:String="";
  nivel:String="";
  titulo:String="";
  periodo:String="";
  descripcion:String="";

  constructor(private formBuilder: FormBuilder, private servEducacion:EducacionService) {
    this.form= this.formBuilder.group({
      
      institucion:['',[Validators.required]],
      nivel:['', [Validators.required]],
      titulo:['', [Validators.required]],
      periodo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    })

   }

   ngOnInit() {}
   onCreate():void{
    const edu = new Educacion (this.institucion,this.nivel, this.titulo, this.periodo,this.descripcion);

      this.servEducacion.create(edu).subscribe(data=> { alert("experiencia Agregada")
        window.location.reload();
        }, 
        err => { alert("Fallo la carga")      
          window.location.reload();
      }); 
  
}






   
   get Institucion(){
    return this.form.get("institucion");
   }
   get Nivel(){
    return this.form.get("nivel");
   }

  get Titulo(){
    return this.form.get("titulo");
  }
 
  get  Periodo(){
   return this.form.get("periodo");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }




  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  } 


}
