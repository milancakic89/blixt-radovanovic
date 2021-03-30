import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {

  constructor() { }

  public prices = [
    {title: 'POPRAVKA I SERVIS BOJLERA', items: [
      {name: 'Zamena termostata', price: '15'},
      {name: 'Zamena instalacija', price: '15'},
      {name: 'Zamena grejača', price: 'od 15'},
      {name: 'Demontaža i montaža bojlera (5l-10l)', price: '20'},
      {name: 'Demontaža i motaža bojlera     (30l-80l)', price: '30'}
    ]},
    {title: 'POPRAVKA I SERVIS ASPIRATORA', items: [
      {name: 'Zamena filtera', price: '10'},
      {name: 'Ugradnja klasičnog aspiratora', price: 'od 15'},
      {name: 'Zamena Ugradnja aspiratora sa otvorom za ventilaciju', price: '30 - 60'}
    ]},
    {title: 'POPRAVKA I SERVIS  ELEKTROKOTLA', items: [
      {name: 'Zamena grejača kotla', price: 'od 25'},
      {name: 'Zamena sklopke na kotlu', price: 'od 20'},
      {name: 'Servis kotla', price: 'na upit'},
      {name: 'Zamena termostata na kotlu', price: '15'},
      {name: 'Zamena instalacije na kotlu', price: '15 - 30'}
    ]},
    {title: 'POPRAVKA I SERVIS VEŠ MAŠINE', items: [
      {name: 'Zamena pumpe', price: 'od 15'},
      {name: 'Zamena grejača', price: 'od 20'},
      {name: 'Zamena kondezatora', price: 'od 15'},
      {name: 'Zamena tunela gume', price: 'od 15'},
      {name: 'Nivelisanje mašine', price: '15'},
      {name: 'Zamena kaiša', price: 'od 20'},
      {name: 'Puštanje u rad veš mašine', price: '20'},
      {name: 'Popravka kolektorskog elektro motora', price: 'na upit'},
      {name: 'Popravka programatora', price: 'na upit'},
      {name: 'Popravka elektronike', price: 'na upit'},
      {name: 'Zamena hidrostata', price: 'od 15'},
      {name: 'Ćišćenje filterae', price: '15'},
      {name: 'Zamena creva', price: 'od 15'}
    ]},
    {title: 'POPRAVKA I SERVIS ŠPORETA', items: [
      {name: 'Zamena ringle na ravnoj ploči', price: 'od 20'},
      {name: 'Zamena grejača na rerni', price: 'od 20'},
      {name: 'Zamena kabla na šporetu', price: '10'},
      {name: 'Zamena ringle na šporetu', price: '20'},
      {name: 'Zamena termostata na šporetu', price: '20'}
    ]},
    {title: 'POPRAVKA I SERVIS INSTALACIJA', items: [
      {name: 'Zamena lustera', price: 'od 10 - 30'},
      {name: 'Zamena plafonjerki', price: '10 svaka sledeća 5'},
      {name: 'Zamena ventilatora', price: '15'},
      {name: 'Zamena zvona', price: '10'},
      {name: 'Zamena prekidača na kablu', price: '10'},
      {name: 'Ugradnja fidove sklopke', price: 'od 25'},
      {name: 'Zamena utikača na kablu', price: '10'},
      {name: 'Zamena sijaličnog grla na lusteru', price: '10'},
      {name: 'Zamena običnog sijaličnog grla', price: '10'},
      {name: 'Zamena spratnih tabli', price: 'od 50'},
      {name: 'Zamena kompletnog indikatora', price: '15'},
      {name: 'Izrada nove instalacije po sijaličnom mestu', price: 'na upit'},
      {name: 'Izrada nove instalacije po metru', price: 'na upit'},
      {name: 'Zamena trofazne utičnice', price: '15'},
      {name: 'Zamena zidne lampe', price: '10'},
      {name: 'Zamena sijaličnog kabla', price: '10'},
      {name: 'Zamena automatskog osigurača', price: '10'},
      {name: 'Zamena prekidača', price: '10 svaki sledeći 5'},
      {name: 'Zamena utičnice u zidu', price: '10 svaka sledeća 5 '},
      {name: 'Zamena trofazne kutije', price: '15'},
      {name: 'Zamena indikatorskog prekidača', price: '15'},
      {name: 'Zamena Limitatora', price: 'od 20'},
      {name: 'Popravka svih vrsta grejalica', price: 'od 25'},
      {name: 'Ugradnja kupatilske grejalice', price: '20'},
      {name: 'Zamena grejača na kvarcnoj peći', price: '15'},
      {name: 'Ugradnja panik lampe', price: 'od 15'},
      {name: 'Ugradnja indikatora dima', price: 'od 20'},
      {name: 'Ugradnja i puštanje u rad električnih uređaja ', price: 'od 15'},
      {name: 'Sistemi video nadzora', price: 'na upit'},
      {name: 'Sistemi alarma', price: 'na upit'},
      {name: 'Sistemi interfona i kontrole pristupa', price: 'na upit'},
      {name: 'Audio i video sistemi', price: 'na upit'},
      {name: 'Računarske i optičke mreže', price: 'na upit'}
    ]},
    
  ]

  ngOnInit(): void {
  }

}
