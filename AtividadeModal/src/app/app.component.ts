import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imagem_carta: string;
  carta: string;
  deck: Object[] = [];

  constructor(
    appService: AppService
  ){
    appService.getOlaMundo().subscribe((decks) => {
      console.log(decks.data)
      this.deck = decks.data
    })
  }

  verify(){
    this.deck.forEach(card => {
      console.log(card)
      if(this.carta == card["name"]){
        this.imagem_carta = card["card_images"]["0"]["image_url"]
        console.log(this.imagem_carta)
      }
    });
  }

  appValor = 'Escreva'

  listaDeTestes: string[] = ['uno', 'duno', 'tri', 'four']
  teste: string;

  fotos: { id: number, arquivo: File }[] = [];

  mostrarFotos(){
    console.log(this.fotos);
  }

  adicionarFotos(): void {
      this.fotos.push({ id: this.fotos.length + 1, arquivo: undefined })
  }

  isUno(): boolean {
    return this.teste === 'uno';
  }
  isDuno(): boolean {
    return this.teste === 'duno';
  }
  isTri(): boolean {
    return this.teste === 'tri';
  }
  isFour(): boolean {
    return this.teste === 'four';
  }

  escolherCor(){
    if(this.isUno()){
      return 'red'
    }else if(this.isDuno()){
      return 'blue'
    }else if(this.isTri()){
      return 'black'
    }else if(this.isFour()){
      return 'violet'
    }
  }
}
