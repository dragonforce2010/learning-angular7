import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginGuard } from './guards/login.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'productlist', pathMatch: 'full'},
    { path: 'productlist', component: ProductListComponent},
    { path: 'productdetail', component: ProductDetailComponent}
  ] },
  { path: 'product', component: ProductComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'pricing', component: PricingComponent}, 
  { path: 'sitemap', component: SitemapComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ LoginGuard ]
})
export class AppRoutingModule { }
