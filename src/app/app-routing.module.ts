import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { MLoginComponent } from './Module/m-login/m-login.component';

const routes: Routes = [
  {path:'',redirectTo:'porfolio',pathMatch:'full'},
  {path:'porfolio',component:PorfolioComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
