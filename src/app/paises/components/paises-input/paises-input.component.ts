import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

// <!-- cajita donde se ingresa el texto -->

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
})
export class PaisesInputComponent implements OnInit {


  //creamos el evento onEnter
  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  //ceamos el evento onDebounce
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  // recibimos el placeholder desde por-capital.component.html
  //luego lo usamos en la contraparte HTML de este archivo.
  @Input() placeholder: string = ''

  //creamos un observable "debouncer"
  debouncer: Subject<string> = new Subject()

  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300)) //no hagas el subscribe hasta que pasen 300ms 
    .subscribe((valor) => {
      console.log('debouncer', valor);
      this.onDebounce.emit(valor)

    })


  }

  teclaPresionada() {
    /*esto manda "this.termino" al this.debouncer de arriba, llega como argumento del .suscribe
    y se termina consologueando como valor y emitiendo como valor */
    this.debouncer.next(this.termino)


  }




  enviar() {
    this.onEnter.emit(this.termino)
  }



}
