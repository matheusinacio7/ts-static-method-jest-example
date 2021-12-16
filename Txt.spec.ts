import { describe, it, expect, jest } from '@jest/globals';
import { Txt } from './Txt';
import { Quote } from './Quote';

jest.mock('./Quote'); // example of mocking without behavior

describe('Add quote', () => {
  it('adds quotes to its array', () => {
    const testTxt = new Txt();
    const jestMcTestQuote = new Quote();

    testTxt.addQuote(jestMcTestQuote);

    expect(testTxt.quotes.length).toBe(1);
  });
});
