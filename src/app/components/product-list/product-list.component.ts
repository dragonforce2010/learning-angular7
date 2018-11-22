import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  private products: Array<Product> = this.productService.getProducts()

  ngOnInit() {
  }

  onProductsChange(prodcuts: Array<Product>) {
    this.products = prodcuts
  }

}
