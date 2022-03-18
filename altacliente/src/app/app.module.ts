import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './altacliente/formulario/formulario.component';
import { ListaclienteComponent } from './altacliente/listacliente/listacliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
