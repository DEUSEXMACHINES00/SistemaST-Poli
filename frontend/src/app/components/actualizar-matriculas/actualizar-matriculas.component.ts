import { Component } from '@angular/core';
import { Matricula } from "../../models/matricula";
import { MatriculasService } from "../../services/matriculas.service";
import Swal from 'sweetalert2'
import { Router,ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-actualizar-matriculas',
  templateUrl: '../matricula/matricula.component.html',
  styles: [
  ],
  providers: [MatriculasService]
})
export class ActualizarMatriculasComponent {

  public title! : string;
  public matricula! : Matricula;
  public actualizarCompo = true;
  constructor(
    private _matriculaService : MatriculasService,
    private _router : Router,
    private _route : ActivatedRoute
  ){
    this.title = 'Actualizar Matricula'
    this.matricula = new Matricula('','','','','',{ id:'',tipo:'', nombre:'',direccion:'' })

    this._route.params.subscribe(params =>{   
      let placa = params;
      const propiedades = Object.keys(placa)
      placa = placa[propiedades[0]]      
      this.getMatricula(placa);
    });
  }
  getMatricula(placa: any){
    this._matriculaService.getMatricula(placa).subscribe(
      response => {
        this.matricula = response.matricula
      }, error => {

      }
    )
  }

  onSubmit(form:any){
    this._matriculaService.actualizarMaTricula(this.matricula).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Actualizado con exito',
          showConfirmButton: false,
          timer: 1500
        })

      }, error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al actualizar',
          showConfirmButton: false,
          timer: 1500
        }) 
      }
    )
  }

}
