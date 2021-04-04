import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(private service: ModalService) { }


  public openModal(){
    return this.service.showModal.emit(true);
  }

}
