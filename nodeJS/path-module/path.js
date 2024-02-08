const path = require("path");

// dummy file path
const myFilePath = "folder/subfolder/index.js"

// ***************** basename()
// const base1 = path.basename(myFilePath)
//-> "index.js"

// const base1 = path.basename(myFilePath, ".js")
//-> this returns only filename without extension that is "index"

// ***************** extname() ---> returns the extension name
// const ext = path.extname(myFilePath)

// ***************** dirname()
// const dir = path.dirname(myFilePath)

// ***************** join() ---> way to create file paths
// const filePath = path.join("myFolder", "js", "folder1", "file.js")
// ---> returns file path with given arguments... (res: myFolder\js\folder1\file.js)

// ***************** resolve() ---> way to create absolute file paths
// const absPath = path.resolve("myFolder", "js", "folder1", "file.js")
// ---> returns absolute path with passed arguments

/*
------------ note:
1. join() returns relative folder path we are working in.
2. resolve() returns absolute folder path (includes root folders too).
*/

// ***************** environment variables *****************
/*
1. __dirname
2. __filename
*/

/*
-> env var. tells us the absolute path of directory containing the currently
    working file so using "__dirname" instead of "./filepath"
*/
// console.log(__dirname)
//-> result: C:\Users\kasas\Desktop\Udemy\JS\Modern_JS\nodeJS\path-module
//-> absolute file path that the working file is in

/*
difference between the __dirname and __filename is __filename variable includes the file-name too but __dirname variable does not.
*/
// console.log(__filename)
// -> result: C:\Users\kasas\Desktop\Udemy\JS\Modern_JS\nodeJS\path-module\path.js

