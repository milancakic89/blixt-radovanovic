import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() background: string;

  constructor() { }

  public menuOpened = false;

  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

  ngOnInit(): void {
  }

}
