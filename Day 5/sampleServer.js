// server creation
var http=require('http') //importing http module
http.createServer(function(req,res){
    res.write("hello world") // content to display
    res.end()   //end of request
}).listen(7000)

    