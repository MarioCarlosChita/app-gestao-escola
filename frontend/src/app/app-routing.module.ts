import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
   {
    path:"",
    redirectTo:"autenticacao",
    pathMatch:"full"
   },
   {
    path:"home",
    loadChildren: ()=> import('./home/home-module').then(module => module.HomeModule)
   },
   {
    path: "autenticacao",
    loadChildren:()=> import('./autenticacao/autenticaco-module').then(module => module.AutenticacaoModule)
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
