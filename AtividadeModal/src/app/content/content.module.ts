import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConteudoComponent } from './content.component';
import { CustomContentComponent } from './conteudo-customizado/conteudo-customizado.component';

@NgModule({
  declarations: [
    ConteudoComponent,
    CustomContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ConteudoComponent
  ]
})
export class ConteudoModule { }