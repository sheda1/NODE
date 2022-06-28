const http = require('http');
/*
function requestListener(request,response){

}
http.createServer(requestListener);
*/
/*

http.createServer(function(request,response){

});
*/
/*
const server = http.createServer((request,response) => {
    console.log('Shahida');
    
});
server.listen(4000);
*/
//var http = require('http');
/*

http.createServer(function (req, res) {
    
    res.write('shahida');
    res.end();
}).listen(8080);

*/
/*
const server = http.createServer((request,response) => {
    console.log(request.url,request.method,request.headers);
    response.setHeader('Content-Type','text/html');
    response.write('<Html>');
    response.write('<Head><title>My first Page</title><html>');
    response.write('<body><h1>"Welcome to my Node Js project"</h1></body>');
    response.write('</Html>');
    response.end();
});
server.listen(3000);
*/

const server = http.createServer((request,response) => {
    const req = request.url;
    //console.log(req);
    if(req == '/home'){
        //response.write("Welcome home");
        response.write('<Html>');
        response.write('<Head><title>My first Page</title><html>');
        response.write('<body><h1>"Welcome home"</h1></body>');
        response.write('</Html>');
        response.end();
    }
     if(req == '/about'){
       // response.write("Welcome to About Us page");
        response.write('<Html>');
        response.write('<Head><title>My first Page</title><html>');
        response.write('<body><h1>"Welcome to About Us page"</h1></body>');
        response.write('</Html>');
        response.end();
    }
     if(req == '/node'){
        //response.write("Welcome to my Node Js project");
        response.write('<Html>');
        response.write('<Head><title>My first Page</title><html>');
        response.write('<body><h1>"Welcome to my Node Js project"</h1></body>');
        response.write('</Html>');
        response.end();
    } 
});
server.listen(3000);