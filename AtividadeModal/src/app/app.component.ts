import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imagem_carta: string;
  cartaId: string;
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
      if(this.cartaId == card["id"]){
        this.imagem_carta = card["card_images"]["0"]["image_url"]
        console.log(card)
      }
    });
  }
}
