import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-m-acerca',
  templateUrl: './m-acerca.component.html',
  styleUrls: ['./m-acerca.component.css']
})
export class MAcercaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
     descripcion:['', [Validators.required]],
    
   })
  }

  ngOnInit() {}

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
