import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
  {
    path: 'task',
    component: EditarComponent
  },
  {
    path: 'task/:taskbyid',
    component: EditarComponent
  },

  {
    path: '',
    component: ListarComponent
  },

  {
    path: '**',
    redirectTo: '/'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
