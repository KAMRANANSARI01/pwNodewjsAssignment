// const fs = require('fs');
// const { monitorEventLoopDelay } = require('perf_hooks');

// //Q-2 writing some data into nodejs_architechture.txt file.

// let data = 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser';
// fs.writeFile('nodejs_architechture.txt', data , 'utf-8' , function(err,data){
//     if(err){
//         console.log('error : ' + err)
//     }else{
//          console.log('file writing updated')
//     }
// } );

// //Q-2 adding some extra information into nodejs_architechture.txt.

// let dataAppend = "//A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet"

// fs.appendFile('nodejs_architechture.txt',dataAppend,'utf-8',function(err){
//     if(err){
//         console.log('Error :'+ err)
//     }else{
//         console.log('data appended')
//     }
// });

// //Q-3reading the file.

//  fs.readFile('nodejs_architechture.txt', function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data reading :' + data.toString());
//     }
// });

// // Q-4 delete the file content.

// fs.unlink("nodejs_architechture.txt",function(err){
//     if(err){
//         console.log(err)
//     }console.log("file deleted successfully.")
// })

// Q-6 accessing the os name and version.

const os = require("os")
console.log("os name :" + os.type())
console.log("os version :" + os.release())

