import { Component, OnInit } from '@angular/core';
import { Client } from './types';
import { ImpressionsService } from './impressions.service';


@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.scss']
})
export class ImpressionsComponent implements OnInit{
  constructor(private service: ImpressionsService){}

  public impressions: Client[] = [
    { name: "Cakic Milan",
      image: 'assets/img/download.jpg',
      text: "Preporucujem ih svima. Korektni i jako tacni. Ljubazni cak i u idei"},

    { name: "Jovanovic Dragan",
      image: "assets/img/download-2.jpeg",
      text: "Svaka cast za brzinu. Svaka preporuka"},
    {name: "Andrijana Todorcevic", image: "assets/img/download.jpg", text: "Preporucujem. Dosli tacno kad su rekli, i zaista znaju posao."}
  ];

  public slideCounter = 0;
  public numberOfSlides = 2;
  public animate = 'animate-00';

  ngOnInit(){
    //this.numberOfSlides = this.impressions.length;

  }

  public slide(direction: string){
      if(direction === 'left'){
        if(this.slideCounter > 0){
          this.slideCounter--;
        }else{
          this.slideCounter = this.numberOfSlides;
        }
      }else{
        if(this.slideCounter < this.numberOfSlides){
          this.slideCounter++;
        }else{
          this.slideCounter = 0;
        }
      }
      this.animate = `animate-${this.slideCounter}0`;
    //  this.service.slide.emit(this.slideCounter);
  }


}
