import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MatriculasComponent } from './components/matriculas/matriculas.component';
import { InfraccionesComponent } from './components/infracciones/infracciones.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { ActualizarMatriculasComponent } from './components/actualizar-matriculas/actualizar-matriculas.component';

const appRoutes: Routes = [
  {path:'' , component: MatriculasComponent},
  {path:'matriculas' , component: MatriculasComponent},
  {path:'infracciones' , component: InfraccionesComponent},
  {path:'matricula' , component: MatriculaComponent},
  {path:'actualizar-matricula/:placa' , component: ActualizarMatriculasComponent},
];

export const appRoutingProviders: any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
