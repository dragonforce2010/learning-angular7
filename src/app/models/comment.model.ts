export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public username: string,
        public rating: number,
        public content: string,
        public timestamp: Date,
    ) {}
}