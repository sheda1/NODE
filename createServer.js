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

const server = http.createServer((request,response) => {
    console.log('Shahida');
    
});
server.listen(4000);