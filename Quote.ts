export interface QuoteConstructor {
  author?: string;
  content?: string;
}

export class Quote {
  public readonly author: string;
  public readonly content: string;

  constructor({
    author = 'Uncle Ben',
    content = 'With great power comes great responsibility.',
  }: QuoteConstructor = {}) {
    this.author = author;
    this.content = content;
  }

  public static merge(firstQuote: Quote, secondQuote: Quote) {
    const author = `${firstQuote.author} ft. ${secondQuote.author}`;
    const content = `${firstQuote.content} Also, ${Quote.uncapitalize(secondQuote.content)}`;
    const mergedQuote = new Quote({ author, content });
    return mergedQuote;
  }

  private static uncapitalize(sentence: string) {
    return sentence[0].toLowerCase() + sentence.slice(1);
  }
}
