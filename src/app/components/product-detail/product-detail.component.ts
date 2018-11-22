import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product
  private comments: Array<Comment>
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private commentService: CommentService,
  ) { }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.queryParams['productId']
    this.product = this.productService.getProductById(productId)
    this.comments = this.commentService.getCommentsByProductId(productId)
  }

}
