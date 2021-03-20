import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public showModal = false;

  constructor(private service: ModalService) { }

  ngOnInit(): void {
   this.service.showModal.subscribe((value: boolean) =>{
      this.showModal = value;
    })
  }

  public closeGallery(){
    this.service.showModal.emit(false);
  }

}
