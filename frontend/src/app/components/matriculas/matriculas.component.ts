import { Component } from '@angular/core';
import { Matricula } from "../../models/matricula";
import { Router } from '@angular/router';
import { MatriculasService } from "../../services/matriculas.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styles: [
  ],
  providers: [MatriculasService]
})
export class MatriculasComponent {

  public matriculas!: Matricula[];
  public showPopup = false;
  



  constructor(
    private _matriculaService: MatriculasService,
    private _router: Router
  ) {
    this.getEvents();
  }

  showPop() {
    this.showPopup = true;
  }

  hidePop() {
    this.showPopup = false;
  }

  getEvents() {
    this._matriculaService.getMatriculas().subscribe(
      response => {
        this.matriculas = response.matriculas;
      }, error => {
        console.log(error)
      }
    )
  }

  deleteMatricula(placa: any) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar?',
      icon: 'warning',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._matriculaService.eliminarMatricula(placa).subscribe(
          response => {
            if(response.matricula){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Eliminado con exito',
                showConfirmButton: false,
                timer: 1500
              })          
              this._router.navigate(['/'])
            }
    
          }, error => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error al eliminar',
              showConfirmButton: false,
              timer: 1500
            })            
            this._router.navigate(['/'])
          }
        )
        
      }
    })
    
  }
}
