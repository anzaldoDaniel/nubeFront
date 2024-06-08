import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './screens/inicio/inicio.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TareaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
