import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  

  paises: Country[] = [] 
  
  constructor (private paisesService : PaisesService) {}

  buscar () {
    this.hayError = false;
    console.log(this.termino);

    this.paisesService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          this.paises = resp
          console.log(resp);
          
        },
        error: (err) => {
          console.log('Error');
          console.info(err)
          this.hayError = true;
          this.paises =[]
          
        }
      })
    
  }

}
