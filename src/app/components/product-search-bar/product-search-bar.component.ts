import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.css']
})
export class ProductSearchBarComponent implements OnInit {
  private filterKeywords: string
  private allProducts: Array<Product>

  @Output()
  private filteredProducts: EventEmitter<Array<Product>> = new EventEmitter()
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.allProducts = this.productService.getProducts()
  }

  filter(evnet: any) {
    let products =  this.allProducts.filter(product => product.title.indexOf(this.filterKeywords) != -1 || 
                                                       product.desc.indexOf(this.filterKeywords) != -1)
    this.filteredProducts.emit(products)
  }

}
