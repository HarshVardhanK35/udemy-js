// ***************** ""URL"" *****************
/*
URL Methods are:
1. parse()
2. format()
*/
// *****************

// import url-module using...
const url = require('url');

// *****************

// make a dummy "URL"...
const myUrl = "https://example.com/listing?id=1924356&premium=true"

// ***************** Parse the URL -> takes the URL link and parses it
console.log(url.parse(myUrl))
// returns an object that contains...
/*
protocol, 
*/
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?id=1924356&premium=true',
  query: 'id=1924356&premium=true',
  pathname: '/listing',
  path: '/listing?id=1924356&premium=true',
  href: 'https://example.com/listing?id=1924356&premium=true'
}
*/

// *****************


// *****************