import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AnimationService } from './utils/animation.service';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {provideHttpClient} from "@angular/common/http";
import {MarqueeLogosComponent} from "./components/marquee-logos/marquee-logos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MarqueeLogosComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <app-about></app-about>
    <app-marquee-logos></app-marquee-logos>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [AnimationService, provideHttpClient()],

}).catch(err => console.error(err));