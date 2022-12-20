//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//servicios


//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

//componentes de la pagina module
import { LoginComponent } from './Module/login/login.component';
import { MPerfilComponent } from './Module/m-perfil/m-perfil.component';
import { MAcercaComponent } from './Module/m-acerca/m-acerca.component';
import { MEsperienciaComponent } from './Module/m-esperiencia/m-esperiencia.component';
import { MEstudiosComponent } from './Module/m-estudios/m-estudios.component';
import { MProyectosComponent } from './Module/m-proyectos/m-proyectos.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    MPerfilComponent,
    MAcercaComponent,
    MEsperienciaComponent,
    MEstudiosComponent,
    MProyectosComponent,
  

   

 
  
    
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),/* aca irian los parametros por defecto si asi lo quisieramos*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
