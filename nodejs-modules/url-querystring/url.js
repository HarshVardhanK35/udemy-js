// ***************** ""URL"" *****************
/*
URL Methods are:
1. parse()
2. format()
*/
// ***************** 1st Step:

// import url-module using...
const url = require('url');

// ***************** 2nd Step:
// make a dummy "URL"...
const myUrl = "https://example.com/listing?id=1924356&premium=true"

// ***************** Method-1: Parse the URL -> takes the URL link and parses it
// console.log(url.parse(myUrl))

/*
returns an object that contains...
    -> protocol, slashes, auth, host, port, hostname, hash, query, pathname, path, href
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

// ***************** Method-2: Format() method -> reverser of parse() method
//->
const formatUrl = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 192537,
    premium: true
  }
})
// console.log(formatUrl)
// -> returns... "https://www.example.com/listing?id=192537&premium=true"