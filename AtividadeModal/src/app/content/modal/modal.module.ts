import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }