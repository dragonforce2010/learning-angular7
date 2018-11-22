import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getHotProduct(): Product {
    return new Product(
      283,
      'Python 爬虫工程师必学——App数据抓取实战',
      270,
      8.5,
      ["实战", "爬虫", "脚本"],
      '爬虫分为几大方向，WEB网页数据抓取、APP数据抓取、软件系统数据抓取。本课程主要为同学讲解如何用python实现App数据抓取，课程从开发环境搭建，App爬虫必备利器详解，项目实战，到最后的多App端数据抓取项目集成，让你掌握App数据抓取的技能，向更优秀的python爬虫工程师迈进！',
      'https://img2.mukewang.com/5becd2990001215b06000338-240-135.jpg',
      "https://coding.imooc.com/class/252.html?mc_marking=acaed716a834b052cbdd4e06d609ba6d&mc_channel=syb39"
    )
  }
}
