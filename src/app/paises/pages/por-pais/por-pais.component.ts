import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;


  paises: Country[] = []
  paisesSugeridos: Country[] = []

  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino /* el this.termino es igual al temrino que recibo como argumento, porque
    es el que viene del input*/

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
          this.paises = []
        }
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias.
    this.paisesService.buscarPais(termino)
      .subscribe({
        next: paises => this.paisesSugeridos = paises.splice(0,4),
        error: (err) => this.paisesSugeridos = []
      })

  }

}
