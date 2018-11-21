import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { Page404Component } from './page404/page404.component';
import { LoginGuard } from './guard/login.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
  { path: 'sitemap', component: SitemapComponent, canActivate: [LoginGuard]},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ LoginGuard ]
})
export class AppRoutingModule { }
