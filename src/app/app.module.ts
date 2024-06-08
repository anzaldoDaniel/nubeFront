import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms'; // para que funcione el formulario
@NgModule({
  declarations: [
    AppComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // para que funcione el formulario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
