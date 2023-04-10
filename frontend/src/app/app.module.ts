import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing , appRoutingProviders } from "./app.routing";
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';

import { MatriculasComponent } from './components/matriculas/matriculas.component';
import { InfraccionesComponent } from './components/infracciones/infracciones.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { ActualizarMatriculasComponent } from './components/actualizar-matriculas/actualizar-matriculas.component';



@NgModule({
  declarations: [
    AppComponent,
    MatriculasComponent,
    InfraccionesComponent,
    MatriculaComponent,
    ActualizarMatriculasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
