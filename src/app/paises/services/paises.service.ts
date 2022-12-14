import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  get httpParams () {
    return new HttpParams().set(
      'fields',
      'population,capital,name,cca2,flags'
    )
  }

  constructor(private http: HttpClient) { }

  
  // hacep eticiones basandose en un término, devuelve una lista de países.
  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url, {params: this.httpParams})
  }


//hace petición basandose en un término, y devuelve una lista de paises basandose en la capital.
  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>(url, {params: this.httpParams})
  }

  /*hace petición basandose en un id de país en particular. acá se retorna un solo país, 
  por eso country sin [] */
  buscarPorCodigo(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<Country>(url)
  }

  buscarRegion(region: string):Observable<Country[]> {


    const url = `${this.apiUrl}/region/${region}`

    return this.http.get<Country[]>(url, {params: this.httpParams})
  }


}
