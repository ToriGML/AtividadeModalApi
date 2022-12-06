import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConteudoComponent } from './content.component';

@NgModule({
  declarations: [
    ConteudoComponent
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