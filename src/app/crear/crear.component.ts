import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; //agregado
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

formulario: FormGroup

usuarioActivo = {
  titulo: '',
  descripcion: '',
  asignado: '',
  fecha_fin: '',
  estado: 'En proceso' //chequear con la base como lo tiene definido
}

constructor(private fb:FormBuilder){
  this.formulario = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    asignado: ['', Validators.required],
    fecha_fin: ['', Validators.required],
    estado: ['', Validators.required]
  })
}

ngOnInit(): void {
  this.formulario.patchValue({    
    Estado: this.usuarioActivo.estado
  })

  this.formulario.get('estado')?.disable();
}

enviar(){
console.log(this.formulario.value)
}

tieneErrores(control: string, error:string){
  return this.formulario.get(control)?.hasError(error) && this.formulario.get(control)?.touched

}

}
