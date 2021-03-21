import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent implements OnInit {

  @Input() heading: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
