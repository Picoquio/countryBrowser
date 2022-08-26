import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
})
export class PaisesInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  
  termino: string = '';
  
  enviar() {
    this.onEnter.emit(this.termino)
  }

}
