// server creation
var http=require('http') //importing http module
var fs=require('fs') //importing file system module, to acces system files

//first run the createserver func,
// then call the callback to avoid the server restart when changes are made
http.createServer(function(req,res){
    
    //passing the file
    fs.readFile('Day 5/samplefrontend.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'}) //error code, type of file to display
        res.write(data) // content to display
        res.end()   //end of request
    })
   
}).listen(7000)//portnumber

    