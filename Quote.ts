export interface QuoteConstructor {
  author?: string;
  content?: string;
}

export class Quote {
  author: string;
  content: string;

  constructor({
    author = 'Uncle Ben',
    content = 'With great power comes great responsibility.',
  }: QuoteConstructor = {}) {
    this.author = author;
    this.content = content;
  }
}
