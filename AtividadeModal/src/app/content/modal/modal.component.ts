import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent {
  
  abrirModal: boolean = false;

  abrirEfechar(){
    this.abrirModal = !this.abrirModal
  }

}