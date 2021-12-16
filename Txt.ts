import { Quote } from './Quote';

export class Txt {
  readonly quotes: Array<Quote> = [];

  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);
  }
}
