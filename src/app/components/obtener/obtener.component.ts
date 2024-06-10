import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-obtener',
  templateUrl: './obtener.component.html',
  styleUrls: ['./obtener.component.css']
})
export class ObtenerComponent {
  tareas: Tarea[] = [];
  tareaEditando: string | undefined;

  private apiService = inject(ApiService);

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.apiService.obtenerTarea().subscribe(
      (tareas: Tarea[]) => {
        this.tareas = tareas
      }, (error) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  editarTarea(id: string) {
    this.tareaEditando = id
  }

}
