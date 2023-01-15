import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Entity/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-m-perfil',
  templateUrl: './m-perfil.component.html',
  styleUrls: ['./m-perfil.component.css']
})
export class MPerfilComponent implements OnInit {
  [x: string]: any;

  form: FormGroup;
      
      //id:string ="";
      nombre:string ="";
      apellido:String="";
      titulo:string=""; 
      email:string="";
      password:string="";
      telefono:string="";
      descripcion:string ="";
      foto:string="";

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private servPersona:PersonaService){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
   })
  }

  ngOnInit() {}


  //(
  onCreate():void{
      const pers = new Persona (this.nombre,this.apellido, this.titulo , this.email, this.telefono, this.password, this.descripcion,this.foto );
      
        this.servPersona.create(pers).subscribe(data=>{alert("experiencia Agregada")
          window.location.reload();
          }, err => { alert("Fallo la carga")      
            window.location.reload();
        }); 
    
  }


  get Nombre(){
    return this.form.get("nombre");
   }
   get Apellido(){
    return this.form.get("apellido");
   }
//////////////////////////////////////////
  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

 
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      this.onCreate();
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  } 


}
 

