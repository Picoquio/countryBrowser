import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService

    ) { }

  ngOnInit(): void {
    
    //obtenemos el id del pais
    this.activatedRoute.params
      .subscribe(params => {
        console.log(params);

        //obtenemos toda la información del pais
        this.paisService.buscarPorCodigo(params['id'])
          .subscribe(pais => {
            console.log(pais);
            
          })



        
      })

  }

}
