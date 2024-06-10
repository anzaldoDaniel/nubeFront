import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'http://localhost:3000/api/tareas'
  http = inject(HttpClient);

  constructor() { }

  public obtenerTarea() {
    return this.http.get<Tarea[]>(this.url);
  }

  public obtenerTareaPorId(id: number | string) {
    return this.http.get<Tarea>(`${this.url}/${id}`)
  }

  public editarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.url}/${tarea._id}`, tarea);
  }

}
