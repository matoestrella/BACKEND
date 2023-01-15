import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,Route,Router,RouterStateSnapshot,UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor( private autenticacionServicio:AutenticacionService, private rutas:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
      let currentUser=this.autenticacionServicio.UsuarioAutenticado;
      if(currentUser && currentUser.accessToken){
        return true;
       }
      else{
       this.rutas.navigate([`/iniciar secion`])
        return false;
      }
    }
  }
