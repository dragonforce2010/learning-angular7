import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { CommentService } from './services/comment.service';
import { WeatherPipe } from './pipes/weather.pipe';
import { ProductSearchBarComponent } from './components/product-search-bar/product-search-bar.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    RatingComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    SitemapComponent,
    ProductDetailComponent,
    Page404Component,
    ProductListComponent,
    WeatherPipe,
    ProductSearchBarComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProductService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
