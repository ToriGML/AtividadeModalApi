import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConteudoComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http'
import { ModalComponent } from './content/modal/modal.component';
import { ModalModule } from './content/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent
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
