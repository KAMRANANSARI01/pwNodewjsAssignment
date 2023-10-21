// Q-7 making the server on local host using nodejs http module.

const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/"){
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>")
    }
    res.end()
});

server.listen(5000);
console.log("THE HTTP SERVER IS RUNNING ON PORT 5000");

// Q-8 use the events module in nodejs.

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const subscribeMessage = (chanelName)=>{
    console.log(`Thanks for subscribing to the ${chanelName}`)
};

eventEmitter.addListener("subscribe" , subscribeMessage);

eventEmitter.emit("subscribe", "Collage Wallah");

// Q-9 add and remove listner.

const readMe = new EventEmitter()
const readMyMsg = (msg)=>{
    console.log(`i'm reading ${msg}`)
}

readMe.addListener("read" , readMyMsg)
console.log("before deleting the listner");
readMe.emit("read","coding Nodejs");

console.log("after deleting the listner");

readMe.removeListener("read",readMyMsg)
readMe.emit("read","nodejs pw")
