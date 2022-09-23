import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { IndexHomeComponent } from './components/index-home-component';
import { MenuComponent } from './components/menu/menu-component';
import { SidebarComponent } from './components/sidebar/sidebar-component';
import { HomeModuleRouting } from './home-routing.module';

 

@NgModule({
  declarations: [ 
    IndexHomeComponent,
    SidebarComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    HomeModuleRouting
   
  ],
  providers: [],
})
export class HomeModule { }
