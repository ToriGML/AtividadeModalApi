import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ConteudoComponent implements OnInit {

  text: string;

  @ViewChild('nome')
  nome: ElementRef<HTMLInputElement>;
  @ViewChild('cor')
  cor: ElementRef<HTMLInputElement>;
  @ViewChild('texto')
  texto: ElementRef<HTMLHeadingElement>;

  myFunction() {
      console.log(this.nome.nativeElement.value)
      this.text = this.nome.nativeElement.value
      this.texto.nativeElement.style.backgroundColor = this.cor.nativeElement.value
  }

  ngOnInit(): void {
    console.log(this.texto)
    
  }
}