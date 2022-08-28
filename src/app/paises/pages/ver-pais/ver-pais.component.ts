import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country; /* pais puede ser nulo, sé lo que estoy haciendo, pero tratalo como si 
  siempre tuviera data */

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((param) => {
          return this.paisService.buscarPorCodigo(param['id'])
        }),
        tap(console.log) //recibe el producto del observable del switchMap y lo consologuea
      )
      .subscribe(pais => {
        this.pais = pais[0];
        
        
      })
 


    // //obtenemos el id del pais
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params);

    //     //obtenemos toda la información del pais
    //     this.paisService.buscarPorCodigo(params['id'])
    //       .subscribe(pais => {
    //         console.log(pais);

    //       })
    //   })
  }
}
