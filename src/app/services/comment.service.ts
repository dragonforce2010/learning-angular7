import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentStore:Array<Comment> = [
    new Comment(1, 1, 'dragonforce2010', 8.93, '产品太棒了，老师很用心', new Date(2018, 10, 20)),
    new Comment(2, 1, '笑傲江湖', 2.5, '盗版，内容太差了！', new Date(2018, 10, 20)),
    new Comment(3, 1, '大牛', 3.6, '白费了银子，感觉很不值得！人间不值得！', new Date(2018, 10, 20)),
    new Comment(4, 1, 'python达人', 5.50, '一般吧，没有太出色的亮点，自己看几篇文章也能学会，感觉不太值这个价钱', new Date(2018, 10, 20)),
    new Comment(5, 1, '达摩祖师', 9.0, '一流的水准，简直是大牛，老师很用心，挽救了我的事业', new Date(2018, 10, 20)),
    
    new Comment(1, 2, 'dragonforce2010', 8.93, '产品太棒了，老师很用心', new Date(2018, 10, 20)),
    new Comment(2, 2, '笑傲江湖', 2.5, '盗版，内容太差了！', new Date(2018, 10, 20)),
    new Comment(3, 2, '大牛', 3.6, '白费了银子，感觉很不值得！人间不值得！', new Date(2018, 10, 20)),
    new Comment(4, 2, 'python达人', 5.50, '一般吧，没有太出色的亮点，自己看几篇文章也能学会，感觉不太值这个价钱', new Date(2018, 10, 20)),
    new Comment(5, 2, '达摩祖师', 9.0, '一流的水准，简直是大牛，老师很用心，挽救了我的事业', new Date(2018, 10, 20)),
    
    new Comment(1, 3, 'dragonforce2010', 8.93, '产品太棒了，老师很用心', new Date(2018, 10, 20)),
    new Comment(2, 3, '笑傲江湖', 2.5, '盗版，内容太差了！', new Date(2018, 10, 20)),
    new Comment(3, 3, '大牛', 3.6, '白费了银子，感觉很不值得！人间不值得！', new Date(2018, 10, 20)),
    new Comment(4, 3, 'python达人', 5.50, '一般吧，没有太出色的亮点，自己看几篇文章也能学会，感觉不太值这个价钱', new Date(2018, 10, 20)),
    new Comment(5, 3, '达摩祖师', 9.0, '一流的水准，简直是大牛，老师很用心，挽救了我的事业', new Date(2018, 10, 20)),

    new Comment(1, 4, 'dragonforce2010', 8.93, '产品太棒了，老师很用心', new Date(2018, 10, 20)),
    new Comment(2, 4, '笑傲江湖', 2.5, '盗版，内容太差了！', new Date(2018, 10, 20)),
    new Comment(3, 4, '大牛', 3.6, '白费了银子，感觉很不值得！人间不值得！', new Date(2018, 10, 20)),
    new Comment(4, 4, 'python达人', 5.50, '一般吧，没有太出色的亮点，自己看几篇文章也能学会，感觉不太值这个价钱', new Date(2018, 10, 20)),
    new Comment(5, 4, '达摩祖师', 9.0, '一流的水准，简直是大牛，老师很用心，挽救了我的事业', new Date(2018, 10, 20)),
    
    new Comment(1, 5, 'dragonforce2010', 8.93, '产品太棒了，老师很用心', new Date(2018, 10, 20)),
    new Comment(2, 5, '笑傲江湖', 2.5, '盗版，内容太差了！', new Date(2018, 10, 20)),
    new Comment(3, 5, '大牛', 3.6, '白费了银子，感觉很不值得！人间不值得！', new Date(2018, 10, 20)),
    new Comment(4, 5, 'python达人', 5.50, '一般吧，没有太出色的亮点，自己看几篇文章也能学会，感觉不太值这个价钱', new Date(2018, 10, 20)),
    new Comment(5, 5, '达摩祖师', 9.0, '一流的水准，简直是大牛，老师很用心，挽救了我的事业', new Date(2018, 10, 20)),
    
  ]
  constructor() { }

  getCommentsByProductId(productId: number): Array<Comment> {
    let comments = this.commentStore.filter(comment => comment.productId == productId)
    comments.sort( (a, b) => b.rating - a.rating )
    return comments
  }
}
