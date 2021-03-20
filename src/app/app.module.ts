import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HeroItemComponent } from './hero/hero-item/hero-item.component';
import { WhyUsComponent } from './home/why-us/why-us.component';
import { ItemComponent } from './home/why-us/item/item.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { ItemFullComponent } from './home/what-we-do/item-full/item-full.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { AlbumComponent } from './home/gallery/album/album.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    HeroItemComponent,
    WhyUsComponent,
    ItemComponent,
    WhatWeDoComponent,
    ItemFullComponent,
    GalleryComponent,
    ModalComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
