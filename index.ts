import { Quote } from './Quote';
import { Txt } from './Txt';

const uncleBenQuote = new Quote();
const linusTorvaldQuote = new Quote({
  author: 'Linus Torvald',
  content: 'Talk is cheap. Show me the code.',
});

const myTxt = new Txt();
myTxt.addQuote(uncleBenQuote);
myTxt.addQuote(linusTorvaldQuote);

myTxt.exportMergedQuotes('./uncle-torvald');
