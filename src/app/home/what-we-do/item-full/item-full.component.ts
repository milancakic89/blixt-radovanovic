import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-full',
  templateUrl: './item-full.component.html',
  styleUrls: ['./item-full.component.scss']
})
export class ItemFullComponent implements OnInit {

  @Input() side: string;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.img)
  }

}
