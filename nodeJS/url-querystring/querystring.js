// ------------------ QueryString ------------------
/*
-> in a link https://www.example.com/listing?id=192537&premium=true
-> the querystring starts from after the "?"mark that is... "id=192537&premium=true"
*/

// import the QS using...
const qs = require("querystring");

// there are main two methods in it:
// -> 1. parse()
// -> 2. stringify()

// *****************

// 1. parse()
const myQuery = "year=2023&month=jan&day=5"
const qsParse = qs.parse(myQuery);
console.log(qsParse)

// -> returns...
// { year: '2023', month: 'jan', day: '5' }

// *****************

// 2.stringify() -> to convert an object into a Query-String (reverse for parse() method)
const qsStringify = qs.stringify({
  year: '2023',
  month: 'jan',
  day: '5'
})
console.log(qsStringify)
// *****************