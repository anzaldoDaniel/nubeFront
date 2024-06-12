import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarTareaComponent } from './components/eliminarTareas/eliminar-tarea/eliminar-tarea.component';

const routes: Routes = [
  {path:'eliminar_tarea', component:EliminarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
