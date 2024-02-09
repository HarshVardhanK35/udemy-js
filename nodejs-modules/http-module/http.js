//  ******************************** creating a server ********************************

// --------------------------- import "http" module:
const http = require("http");

// --------------------------- create a PORT
const PORT = 5000;

// --------------------------- create a server
// ******************************** the URL property --- request.url
// ******************************** console.log(request.url)
// const server = http.createServer((request, response) => {

//   const url = request.url;
//   if (url === "/") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end(`<h1>This is HOME page</h1>`);
//   }
//   else if (url === "/about") {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end(`<h1>This is ABOUT page</h1>`);
//   }
//   else {
//     response.writeHead(404, { "content-type": "text/html" });
//     response.end(`<h1><strong>404</strong>: page not found</h1>`);
//   }
// });

// --------------------------- Listen to the server
// server.listen(PORT, () => {
//   console.log(`Running on: http://localhost:${PORT}`);
// });


//  ******************************** reading a file with a server ********************************

// ---------------------------------------- import file-system to read a file
// const fs = require("fs");

// const server = http.createServer((req, res)=> {
//   const url = req.url;

//   if(url === "/"){
//     fs.readFile("index.html",(err, file)=> {
//       if(err){
//         res.writeHead(500, {"content-type": "text/html"});
//         res.end("<h1>Server problem</h1>")
//       }
//       else{
//         res.writeHead(200, {"content-type": "text/html"})
//         res.end(file)
//       }
//     })
//   }
//   else{
//     response.writeHead(404, { "content-type": "text/html" });
//     response.end(`<h1><strong>404</strong>: page not found</h1>`);
//   }
// });

// server.listen(PORT, ()=> {
//   console.log(`server is running: http://localhost:${PORT}`)
// })


//  ******************************** send JSON data using HTTP ********************************
const posts = [
  {
    id: 1,
    title: "post-one",
    body: "this is the body for post-one"
  },
  {
    id: 2,
    title: "post-two",
    body: "this is the body for post-two"
  }
]

const server = http.createServer((req, res)=> {
  const url = req.url;

  if(url === "/api/posts"){
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify({ success: true, data: posts }))
  }
  else{
    res.writeHead(400, {"content-type": "text/html"})
    res.end(`<h1><strong>404</strong>: page not found</h1>`)
  }
})

server.listen(PORT, ()=> {
  console.log(`server up n running: http://localhost:${PORT}`)
})