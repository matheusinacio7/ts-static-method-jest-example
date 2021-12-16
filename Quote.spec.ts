import { describe, it, expect } from '@jest/globals';
import { Quote } from './Quote';

describe('Form constructor', () => {
  it('constructs a new Form instance with default values', () => {
    const testQuote = new Quote();
    expect(testQuote.author).toBe('Uncle Ben');
    expect(testQuote.advice).toBe('With great power comes great responsibility.');
  });
});
