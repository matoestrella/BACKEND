import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
  

@Component({
  selector: 'app-m-login',
  templateUrl: './m-login.component.html',
  styleUrls: ['./m-login.component.css']
})
export class MLoginComponent implements OnInit {
  form: FormGroup;

constructor (private formBuilder: FormBuilder, private auteticacionService:AutenticacionService, private ruta:Router){
   this.form = formBuilder.group ({

      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit(): void {}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    this.auteticacionService.IniciarSesion(this.form.value).subscribe(data=> {
     console.log("DATA:" + JSON.stringify(data));
    
    })
     this.ruta.navigate([`/porfolio`])
  }


}
 
