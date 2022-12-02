import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './content/botao/botao.component';
import { MeuInputComponent } from './content/meu-input/meu-input.component';
import { FormsModule } from '@angular/forms';
import { ConteudoComponent } from './content/content.component';
import { CustomContentComponent } from './content/conteudo-customizado/conteudo-customizado.component';
import { HttpClientModule } from '@angular/common/http'
import { ModalComponent } from './content/modal/modal.component';
import { ModalModule } from './content/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    MeuInputComponent,
    ConteudoComponent,
    CustomContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
