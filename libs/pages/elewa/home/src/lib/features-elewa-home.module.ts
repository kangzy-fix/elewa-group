import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { PartnerimageComponent } from './components/partnerimage/partnerimage.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    PartnerimageComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}
