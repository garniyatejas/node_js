const http=require("http");
const { request } = require("https");
let server=http.createServer((request,Response)=>{
    Response.write("<h1>Hello </h1>");
    Response.write
    Response.write("<h1>Hello World!</h1>");
    Response.write("<h2>Hello this is my first Node js project</h2>");
    Response.end();
}) 
server.listen(7878,()=>{
    console.log("Listenig 7878");
});