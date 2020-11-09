export class Quotes {
    showMore: boolean;
    constructor(
        public id: number,
        public quotePublisher: string,
        public quoteMessage: string,
        public quoteAuthor: string,
        public inputDate: Date
        ){
            this.showMore = false;
            
        }
}
