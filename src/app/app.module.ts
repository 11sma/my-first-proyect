import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraDesgravacioComponent } from './calculadora-desgravacio/calculadora-desgravacio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CalculadoraDesgravacioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CalculadoraDesgravacioComponent]
})
export class AppModule { }
