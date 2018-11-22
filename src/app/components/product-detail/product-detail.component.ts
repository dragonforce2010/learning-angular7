import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private productTitle: string
  private imgUrl: string
  private hotProduct: Product

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.queryParams['productTitle']
    this.imgUrl = this.routeInfo.snapshot.queryParams['imgUrl']
    this.hotProduct = this.productService.getHotProduct()
  }

}
