import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  public menuOpened = false;

  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

  ngOnInit(): void {
  }

}
