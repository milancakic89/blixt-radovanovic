import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { FooterComponent } from './footer/footer.component';
import { ImpressionsComponent } from './home/impressions/impressions.component';
import { ClientComponent } from './home/impressions/client/client.component';
import { ImpressionsService } from './home/impressions/impressions.service';
import { ContactComponent } from './contact/contact.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { PricesComponent } from './prices/prices.component';
import { PriceTableComponent } from './prices/price-table/price-table.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoComponent } from './about-us/info/info.component';
import { GalleryItemComponent } from './modal/gallery-item/gallery-item.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'cenovnik', component: PricesComponent},
  {path: 'o-nama', component: AboutUsComponent}
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
    AlbumComponent,
    FooterComponent,
    ImpressionsComponent,
    ClientComponent,
    ContactComponent,
    ContactInfoComponent,
    PricesComponent,
    PriceTableComponent,
    AboutUsComponent,
    InfoComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ModalService, ImpressionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
