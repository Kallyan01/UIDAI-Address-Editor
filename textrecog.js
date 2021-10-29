const Tesseract = require( 'tesseract.js');
 
Tesseract.recognize(
  '\adhar.png',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})