import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MusicaComponent} from "./musica/musica.component";
import {InicioComponent} from "./inicio/inicio.component";
import {ListaComponent} from "./lista/lista.component";
import {AsignarComponent} from "./asignar/asignar.component";
import {ApiComponent} from "./api/api.component";

const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'musica', component: MusicaComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'lista/:nombre', component: ListaComponent},
  {path: 'musica/:titulo', component: MusicaComponent},
  {path: 'asignar', component: AsignarComponent},
  {path: 'asignar/:titulo', component: AsignarComponent},
  {path: 'api', component: ApiComponent},
  //{path: 'asignar/:nombre/:titulo', component: AsignarComponent},

]

//asignar


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

export const routingComponents = [InicioComponent]
