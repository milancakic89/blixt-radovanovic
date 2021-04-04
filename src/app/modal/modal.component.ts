import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private service: ModalService) { }

  
  public showModal = false;
  public counter = 0;

  public images = [
    {thumbnail: 'assets/gallery/image--1-thumbnail.jpg', image: 'assets/gallery/image--1-lg.jpg'},
    {thumbnail: 'assets/gallery/image--2-thumbnail.jpg', image: 'assets/gallery/image--2-lg.jpg'},
    {thumbnail: 'assets/gallery/port--3-thumbnail.jpg', image: 'assets/gallery/port--3-lg.jpg'},
    {thumbnail: 'assets/gallery/port--4-thumbnail.jpg', image: 'assets/gallery/port--4-lg.jpg'},
    {thumbnail: 'assets/gallery/image--3-thumbnail.jpg', image: 'assets/gallery/image--3-lg.jpg'},
    {thumbnail: 'assets/gallery/image--4-thumbnail.jpg', image: 'assets/gallery/image--4-lg.jpg'},
    {thumbnail: 'assets/gallery/image--5-thumbnail.jpg', image: 'assets/gallery/image--5-lg.jpg'},
    {thumbnail: 'assets/gallery/image--6-thumbnail.jpg', image: 'assets/gallery/image--6-lg.jpg'},
    {thumbnail: 'assets/gallery/image--7-thumbnail.jpg', image: 'assets/gallery/image--7-lg.jpg'},
    {thumbnail: 'assets/gallery/image--8-thumbnail.jpg', image: 'assets/gallery/image--8-lg.jpg'},
    {thumbnail: 'assets/gallery/image--9-thumbnail.jpg', image: 'assets/gallery/image--9-lg.jpg'},
    {thumbnail: 'assets/gallery/image--10-thumbnail.jpg', image: 'assets/gallery/image--10-lg.jpg'},
    {thumbnail: 'assets/gallery/image--12-thumbnail.jpg', image: 'assets/gallery/image--12-lg.jpg'},
    {thumbnail: 'assets/gallery/port--1-thumbnail.jpg', image: 'assets/gallery/port--1-lg.jpg'},
    {thumbnail: 'assets/gallery/port--2-thumbnail.jpg', image: 'assets/gallery/port--2-lg.jpg'},
    {thumbnail: 'assets/gallery/port--3-thumbnail.jpg', image: 'assets/gallery/port--3-lg.jpg'},
    {thumbnail: 'assets/gallery/port--4-thumbnail.jpg', image: 'assets/gallery/port--4-lg.jpg'},
  ];

  public displaying = [];


  ngOnInit(): void {
   this.service.showModal.subscribe((value: boolean) =>{
      this.showModal = value;
    });
    this.onImageSlide();
  }

  public onImageSlide(){
    this.displaying = this.images.slice(this.counter, this.counter + 5);
  }

  public onSlideRight(){
      if(this.counter < (this.images.length - 5)){
          this.counter++;
      }else{
          this.counter = 0;
      }
      this.onImageSlide();
  }

  public onSlideLeft(){
    if(this.counter > 0){
      this.counter--;
    }else{
      this.counter = this.images.length - 5;
    }

    this.onImageSlide();
  }

  public closeGallery(){
    this.service.showModal.emit(false);
  }

}
