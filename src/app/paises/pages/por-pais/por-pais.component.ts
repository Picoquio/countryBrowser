import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = ''
  
  constructor (private paisesServie : PaisesService) {}

  buscar () {
    console.log(this.termino);

    this.paisesServie.buscarPais(this.termino)
      .subscribe(resp => console.log(resp)
      )
    
  }

}
