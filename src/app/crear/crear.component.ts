import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; //agregado

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

formulario: FormGroup

usuarioActivo = {
  Titulo: '',
  Descripcion: '',
  Asignado: '',
  FechaFin: ''
}

constructor(private fb:FormBuilder){
  this.formulario = this.fb.group({
    Titulo: ['', Validators.required],
    Descripcion: ['', Validators.required],
    Asignado: ['', Validators.required],
    FechaFin: ['', Validators.required]
  })
}

enviar(){
console.log(this.usuarioActivo)
}
}
