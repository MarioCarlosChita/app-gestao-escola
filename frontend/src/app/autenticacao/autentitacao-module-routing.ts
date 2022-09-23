import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAuntenticacoComponent } from './components/index-autenticacao-component';

const routes: Routes = [ 
   {
    path:"",
    component:IndexAuntenticacoComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoModuleRouting { }
