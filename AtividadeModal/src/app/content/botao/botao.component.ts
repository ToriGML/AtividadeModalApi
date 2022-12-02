import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  contador: number

  @Output()
  clicado = new EventEmitter()

  fuiClicado(): void {
    this.clicado.emit(this.contador++)
  }

  constructor() { }

  ngOnInit() {
  }

}
