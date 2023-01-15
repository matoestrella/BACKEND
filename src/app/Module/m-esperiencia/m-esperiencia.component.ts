import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/Entity/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-m-esperiencia',
  templateUrl: './m-esperiencia.component.html',
  styleUrls: ['./m-esperiencia.component.css']
})
export class MEsperienciaComponent implements OnInit {

 form: FormGroup;

    empresa:String="";
    periodo:String="";
    descripcion:String="";
 
  constructor(private formBuilder: FormBuilder, private servExperiencia:ExperienciaService) { 
    this.form= this.formBuilder.group({
      empresa:['',[Validators.required]],
      periodo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      
    })
  }


  ngOnInit() {}

onCreate():void{
  const expe =new Experiencia(this.empresa,this.periodo,this.descripcion);
    this.servExperiencia.create(expe).subscribe(data=>{alert("experiencia Agregada")
      window.location.reload();
      }, err=> { alert("Fallo la carga")      
        window.location.reload();
    }); 
  
}

  
  get Empresa(){
    return this.form.get("empresa");
   }
   get Periodo(){
    return this.form.get("periodo");
   }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
 

  onEnviar(event: Event){
    
    event.preventDefault; 
     if (this.form.valid){
 
      this.onCreate();
       alert("Todo salio bien ¡Enviar formuario!")
    }else{
      alert("Fallo la caraga")
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  } 

}
