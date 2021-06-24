// server creation
var http=require('http') //importing http module
var fs=require('fs') //importing file system module, to acces system files

//first run the createserver func,
// then call the callback to avoid the server restart when changes are made
http.createServer(function(req,res){
    //main page
    if(req.url=='/'){
         //passing the file
        fs.readFile('Day 5/samplefrontend.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'}) //error code, type of file to display
            res.write(data) // content to display
            res.end()   //end of request
        })
    }else if(req.url== '/signup'){ //loginpage
        fs.readFile('Day 5/signup.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url== '/signupaction'){ //actionpage
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("signup successfull")
        res.end()
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
   
   //portnumber ,, arrow fun for server running msg
}).listen(7000,()=>console.log("Server up and running"))

    