import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTareasService {

  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getTareas(){
    return this.http.get<Tarea[]>(`${this.apiUrl}/api/tareas`);
  }

  getTareaById(id: string){
    return this.http.get<Tarea[]>(`${this.apiUrl}/api/tareas/${id}`);
  }
/**
 * @method deleteTareaById
 * @param id 
 * @returns La eliminación de un elemento con un _id particular en cada elemento
 */
  deleteTareaById(id: string | number){
    return this.http.delete<Tarea>(`${this.apiUrl}/api/tareas/${id}`);
  }
}