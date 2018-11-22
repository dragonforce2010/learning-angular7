import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(
        1908,
        'Socket网络编程进阶与实战',
        348,
        3.5,
        ["网络", "套接字"],
        'Socket对于每个工程师的重要性不言而喻。本课程将理论结合实践，带你从零开始，系统学习Socket编程技术，让Socket的学习不再那么零散与难以掌握，同时会提炼出Socket网络传输的核心思想与构架，并带你踩坑出坑，增加你的分析与处理问题的能力，完善你的编程思想与知识体系。最终助力你轻松应对企业中各种Socket应用场景（比如：群聊天、文件传输、直播传流、中断、心跳等）【说明：课程案例部分以Java语言实现】',
        'https://img1.mukewang.com/szimg/5bc3f1420001abf206000338.jpg',
        "https://coding.imooc.com/class/286.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&mc_channel=syb11"
      ),
      new Product(
        1070,
        '基于LNMP的测试工具环境部署',
        1108,
        10.0,
        ["运维", "IT"],
        '简介：LNMP通常是指Linux + Nginx + MySQL + PHP的简称。LNMP与LAMP相比，消耗资源更少，支持的并发连接，更高的效率，反向代理功能效率高、静态文件处理快等。本课程和您一起，手把手分别使用yum和源码安装配置LNMP环境，并部署常见的测试管理工具所需环境',
        'https://img3.mukewang.com/5be01b1f000121dd05400300-240-135.jpg',
        "https://www.imooc.com/learn/1070?mc_marking=e0b7020c55162407944b7ca0fa1373f8&mc_channel=syb13"
      ),
      new Product(
        283,
        'Python 爬虫工程师必学——App数据抓取实战',
        270,
        8.5,
        ["实战", "爬虫", "脚本"],
        '爬虫分为几大方向，WEB网页数据抓取、APP数据抓取、软件系统数据抓取。本课程主要为同学讲解如何用python实现App数据抓取，课程从开发环境搭建，App爬虫必备利器详解，项目实战，到最后的多App端数据抓取项目集成，让你掌握App数据抓取的技能，向更优秀的python爬虫工程师迈进！',
        'https://img2.mukewang.com/5becd2990001215b06000338-240-135.jpg',
        "https://coding.imooc.com/class/252.html?mc_marking=acaed716a834b052cbdd4e06d609ba6d&mc_channel=syb39"
      ),
      new Product(
        1,
        '高等数学-学习算法/人工智能/大数据的第一步',
        325,
        9.7,
        ["AI", "人工智能", "大数据"],
        '小琪老师带领大家，从最基础的函数与极限相关的知识，步步深入到微分学的领域，包括导数与微分的概念，运算法则以及导数的应用。通过朴素平实的语言给大家讲解每一个知识点，并通过例题去展示每一个知识点该如何应用。希望通过本门课程让每一位童鞋走进高数，了解高数，爱上高数。无论你是程序员还是大学生，都可以跟随这门课程一起学习和探究高数知识，打下坚实基础，让你在计算机领域和理科专业更加的得心应手',
        'https://img2.mukewang.com/szimg/5be176260001720e06000338.jpg',
        "https://coding.imooc.com/class/289.html?mc_marking=e1b10d50f61d93b98befa04edc7c22a5&mc_channel=syb20"
      ),
      new Product(
        1,
        'Go语言实战流媒体视频网站',
        377,
        9.64,
        ["GO", "流媒体"],
        '本课程带着同学们使用Go语言实战一个流媒体视频网站。从后端Server到前端UI，全面掌握Go语言的开发关键技能和Go语言编码的架构风格。同时通过讲述SOA服务化解耦的设计理念，帮助同学们理解真实web服务背后的内容。最后通过架构调整实现Cloud native（云原生）部署。',
        'https://img1.sycdn.imooc.com/5bd2aff70001de4906000338-240-135.jpg',
        "https://coding.imooc.com/class/270.html?mc_marking=8425a78408d46cb5fe0884b466cdc456&mc_channel=syb37"
      ),


      new Product(
        1908,
        'Socket网络编程进阶与实战',
        348,
        3.5,
        ["网络", "套接字"],
        'Socket对于每个工程师的重要性不言而喻。本课程将理论结合实践，带你从零开始，系统学习Socket编程技术，让Socket的学习不再那么零散与难以掌握，同时会提炼出Socket网络传输的核心思想与构架，并带你踩坑出坑，增加你的分析与处理问题的能力，完善你的编程思想与知识体系。最终助力你轻松应对企业中各种Socket应用场景（比如：群聊天、文件传输、直播传流、中断、心跳等）【说明：课程案例部分以Java语言实现】',
        'https://img1.mukewang.com/szimg/5bc3f1420001abf206000338.jpg',
        "https://coding.imooc.com/class/286.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&mc_channel=syb11"
      ),
      new Product(
        1070,
        '基于LNMP的测试工具环境部署',
        1108,
        10.0,
        ["运维", "IT"],
        '简介：LNMP通常是指Linux + Nginx + MySQL + PHP的简称。LNMP与LAMP相比，消耗资源更少，支持的并发连接，更高的效率，反向代理功能效率高、静态文件处理快等。本课程和您一起，手把手分别使用yum和源码安装配置LNMP环境，并部署常见的测试管理工具所需环境',
        'https://img3.mukewang.com/5be01b1f000121dd05400300-240-135.jpg',
        "https://www.imooc.com/learn/1070?mc_marking=e0b7020c55162407944b7ca0fa1373f8&mc_channel=syb13"
      ),
      new Product(
        283,
        'Python 爬虫工程师必学——App数据抓取实战',
        270,
        8.5,
        ["实战", "爬虫", "脚本"],
        '爬虫分为几大方向，WEB网页数据抓取、APP数据抓取、软件系统数据抓取。本课程主要为同学讲解如何用python实现App数据抓取，课程从开发环境搭建，App爬虫必备利器详解，项目实战，到最后的多App端数据抓取项目集成，让你掌握App数据抓取的技能，向更优秀的python爬虫工程师迈进！',
        'https://img2.mukewang.com/5becd2990001215b06000338-240-135.jpg',
        "https://coding.imooc.com/class/252.html?mc_marking=acaed716a834b052cbdd4e06d609ba6d&mc_channel=syb39"
      ),
      new Product(
        1,
        '高等数学-学习算法/人工智能/大数据的第一步',
        325,
        9.7,
        ["AI", "人工智能", "大数据"],
        '小琪老师带领大家，从最基础的函数与极限相关的知识，步步深入到微分学的领域，包括导数与微分的概念，运算法则以及导数的应用。通过朴素平实的语言给大家讲解每一个知识点，并通过例题去展示每一个知识点该如何应用。希望通过本门课程让每一位童鞋走进高数，了解高数，爱上高数。无论你是程序员还是大学生，都可以跟随这门课程一起学习和探究高数知识，打下坚实基础，让你在计算机领域和理科专业更加的得心应手',
        'https://img2.mukewang.com/szimg/5be176260001720e06000338.jpg',
        "https://coding.imooc.com/class/289.html?mc_marking=e1b10d50f61d93b98befa04edc7c22a5&mc_channel=syb20"
      ),
      new Product(
        1,
        'Go语言实战流媒体视频网站',
        377,
        9.64,
        ["GO", "流媒体"],
        '本课程带着同学们使用Go语言实战一个流媒体视频网站。从后端Server到前端UI，全面掌握Go语言的开发关键技能和Go语言编码的架构风格。同时通过讲述SOA服务化解耦的设计理念，帮助同学们理解真实web服务背后的内容。最后通过架构调整实现Cloud native（云原生）部署。',
        'https://img1.sycdn.imooc.com/5bd2aff70001de4906000338-240-135.jpg',
        "https://coding.imooc.com/class/270.html?mc_marking=8425a78408d46cb5fe0884b466cdc456&mc_channel=syb37"
      ),
    ];
  }

}


