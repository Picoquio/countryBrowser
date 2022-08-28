import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px
  }
  
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = []

  constructor(private paisesService: PaisesService) { }

  activarRegion (region: string) {
    
    /*OPCIONAL: corta la ejecución si hacemos click en región que ya tenemos cargada */
    if (region === this.regionActiva) {
      return
    }
    
    this.regionActiva = region;

    this.paisesService.buscarRegion(this.regionActiva)
      .subscribe({
        next: (resp) => {
          this.paises = resp
          console.log(resp);
        },
        error: (err) => {
          console.log('Error');
          console.info(err)
    
        }
      })
    
  }

  claseCSS( region:string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' 
  }

}
