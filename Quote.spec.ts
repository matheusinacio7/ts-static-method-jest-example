import { describe, it, expect } from '@jest/globals';
import { Quote } from './Quote';

describe('Quote constructor', () => {
  it('constructs a new Quote instance with default values', () => {
    const testQuote = new Quote();
    expect(testQuote.author).toBe('Uncle Ben');
    expect(testQuote.content).toBe('With great power comes great responsibility.');
  });
});

describe('Quote.merge', () => {
  it('successfully creates a merged Quote', () => {
    const uncleBenQuote = new Quote();
    const linusQuote = new Quote({
      author: 'Linus Torvald',
      content: 'Talk is cheap. Show me the code.',
    });

    const mergedQuote = Quote.merge(uncleBenQuote, linusQuote);
    expect(mergedQuote.author).toBe('Uncle Ben ft. Linus Torvald');
    expect(mergedQuote.content).toBe('With great power comes great responsibility. Also, talk is cheap. Show me the code.');
  });
});
