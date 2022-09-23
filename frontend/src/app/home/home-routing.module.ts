import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { IndexHomeComponent } from './components/index-home-component';

const routes: Routes = [
   {
      path:"",
      component: IndexHomeComponent,
      children:[
        {
         path:"",
         component:DashboardComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRouting { }
