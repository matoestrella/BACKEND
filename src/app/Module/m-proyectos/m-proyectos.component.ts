import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-m-proyectos',
  templateUrl: './m-proyectos.component.html',
  styleUrls: ['./m-proyectos.component.css']
})
export class MProyectosComponent implements OnInit {
  
 form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      
      titulo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      
    })
  }

  ngOnInit(){}

  get Titulo(){
    return this.form.get("titulo");
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
