import { promises as fs } from 'fs';
import { Quote } from './Quote';

export class Txt {
  readonly quotes: Array<Quote> = [];

  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);
  }

  exportMergedQuotes(filename: string) {
    const mergedQuotes = Quote.merge(this.quotes[0], this.quotes[1]);
    const quoteText = `${mergedQuotes.author} - ${mergedQuotes.content}`;
    return fs.writeFile(`${filename}.txt`, quoteText);
  }
}
