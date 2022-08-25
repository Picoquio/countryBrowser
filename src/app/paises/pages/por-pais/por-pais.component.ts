import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  
  constructor (private paisesService : PaisesService) {}

  buscar () {
    this.hayError = false;
    console.log(this.termino);

    this.paisesService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log('Error');
          console.info(err)
          this.hayError = true;
          
        }
      })
    
  }

}
