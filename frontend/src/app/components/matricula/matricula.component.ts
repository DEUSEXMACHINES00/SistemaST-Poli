import { Component } from '@angular/core';
import { Matricula } from "../../models/matricula";
import { MatriculasService } from "../../services/matriculas.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styles: [
  ],
  providers : [
    MatriculasService
  ]
})
export class MatriculaComponent {
  public title!: string;
  public matricula! : Matricula;
  public actualizarCompo = false;
  
  constructor(
    private _matriculaService : MatriculasService,
    private _router: Router
  ){
    this.title = 'Crear Matricula'
    this.matricula = new Matricula('','','','','',{ id:'',tipo:'', nombre:'',direccion:'' })
  }

  onSubmit(form:any){
    this._matriculaService.guardarMaTricula(this.matricula).subscribe(
      response =>{        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Matricula creada con exito',
          showConfirmButton: false,
          timer: 1500
        }) 
        this._router.navigate(['/'])
      }, error =>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error '+ error.error.error,
          showConfirmButton: false,
          timer: 1500
        })              
      }
    )
  }
}
