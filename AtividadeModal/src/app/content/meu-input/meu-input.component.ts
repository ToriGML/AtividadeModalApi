import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'meu-input',
  templateUrl: './meu-input.component.html',
  styleUrls: ['./meu-input.component.css']
})
export class MeuInputComponent implements OnInit {

  @Input()
  valor = '';

  @Output()
  valorChange = new EventEmitter()

  fuiAlterado(){
    console.log(this.valor)
    this.valorChange.emit();
  }


  constructor() { }

  ngOnInit() {
  }

}
