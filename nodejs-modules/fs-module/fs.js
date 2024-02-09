// ********************************** Writing a new File **********************************

// import FS module
// for using promises we use "require('fs/promises')" to import.

// const fs = require('fs'); --> with this statement, we can use only callbacks.

// const fs = require("fs")
const fs = require("fs/promises")

// ***************** Asynchronous way *****************

/*
  writing a file in asynchronous way:
    we have two versions to write a file
      1. asynchronous
      2. synchronous
*/

// ----------------- Using Callback version

/*
  1. writeFile() takes three arguments
  -> filename
  -> content for the file we want to create
  -> a callback
*/

// -------------------------------------------

fs.writeFile("file.text", "Hello! This is FS module", (err)=> {
  if(err){
    throw err;
  }
  // console.log("File Created");
});

// ------------------------  Using Promises Version
  // 1. import FS module with require("fs/promises")

const fsp = require('fs/promises');

fsp.writeFile('file1.text', "This FS module uses Promises")
.then(()=> {
  // console.log("File created")
})
.catch((err)=> {
  // console.log(err)
})

// ***************** Synchronous way *****************
  // 1. in this we use "fs.writeFileSync()"
  // 2. In synchronous way we can not use callbacks


fs.writeFileSync("file2.txt", "This file was created using Synchronous way");
// console.log("File Created")

// -------------------------------------------
/*
Note:
1. in synchronous way, anything below fs.writeFileSync() line does not happen
2. in Asynchronous way, anything below fs.writeFile() the code under it runs in parallel.
    after success completion of everything, callback will be fired.
*/

// -------------------------------------------

// most commonly used way to write Files using "--- promise version ---" will be...

async function createFile(fileName, content){
  try{
    await fs.writeFile(fileName, content);
    // console.log("file created");
  }
  catch(err){
    // console.log(err)
  }
}
// createFile("file4.txt", "In this way we create the file usually !!!")

// ***********************************************************************************************************************

// ********************************** Reading a File **********************************
async function readFileFunction(filename){
  try{
    const data = await fs.readFile(filename, "utf-8")
    // console.log(data)
  }
  catch(err){
    // console.log(err)
  }
}
// readFileFunction("./readfile.txt")

// ***************** Delete a File *****************
fs.unlink()
// ---> this takes filename as an argument.

// ***************** Rename a File *****************
fs.rename("old-filename", "new-filename")
// ---> Takes two arguments {1. old-name} and {2. new-name} with this method old file name will be renamed to the new


// ***************** creating a new folder *****************
/*
  1. we use fs.mkdir() -> takes an arg which will be used to create a folder with that argument
*/

const createFolder = async(folderName) => {
  try{
    await fs.mkdir(folderName)
    // console.log("Folder created")
  }
  catch(err){
    // console.log(err)
  }
}
// createFolder("JAVASCRIPT")