import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formulario: FormGroup;
  alerta = false;
  tarea: Tarea | undefined;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      asignado: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.obtenerTareaPorId(id).subscribe(
        (tarea: Tarea) => {
          this.tarea = tarea;
          this.formulario.patchValue({
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            asignado: tarea.asignado,
            fecha_fin: tarea.fecha_fin,
            estado: tarea.estado
          });
        }
      );
    }
  }

  enviar(): void {
    if (this.formulario.valid && this.tarea) {
      const tareaEditada: Tarea = {
        _id: this.tarea._id,
        titulo: this.formulario.value.titulo,
        descripcion: this.formulario.value.descripcion,
        asignado: this.formulario.value.asignado,
        fecha_fin: this.formulario.value.fecha_fin,
        estado: this.formulario.value.estado
      };

      this.apiService.editarTarea(tareaEditada).subscribe(
        (respuesta) => {
          console.log('Tarea actualizada:', respuesta);
          this.alerta = true;
          setTimeout(() => {
            this.alerta = false;
          }, 5000);
        }
      );
    }
  }

  tieneErrores(control: string, error: string) {
    return this.formulario.get(control)?.hasError(error) && this.formulario.get(control)?.touched;
  }
}
