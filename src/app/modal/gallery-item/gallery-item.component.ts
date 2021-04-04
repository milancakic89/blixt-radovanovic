import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  constructor() { }

  @Input() index: number;
  @Input() thumbnail: string;

  ngOnInit(): void {
  }

}
