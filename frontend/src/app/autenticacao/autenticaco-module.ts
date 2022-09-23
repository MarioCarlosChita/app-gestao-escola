import { NgModule } from "@angular/core";
import { AutenticacaoModuleRouting } from "./autentitacao-module-routing";
import { IndexAuntenticacoComponent } from "./components/index-autenticacao-component";


@NgModule({
  declarations:[
    IndexAuntenticacoComponent
  ],
  providers:[], 
  imports: [ 
    AutenticacaoModuleRouting
  ],
  
})

export class AutenticacaoModule{}