export class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public categories: Array<string>,
      public desc: string,
      public imgUrl: string,
      public courseUrl: string
    ) {
  
    }
  }