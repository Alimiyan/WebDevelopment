// server creation
var http=require('http') //importing http module
var fs=require('fs') //importing file system module, to acces system files
var url=require('url'); //importing url module
const { basename } = require('path');

//first run the createserver func,
// then call the callback to avoid the server restart when changes are made
http.createServer(function(req,res){
    //var q= url.parse(req.url,true) //old method
    var q= new URL(req.url,"http://localhost:7000") //new method
   // console.log(q)
    //main page
    if(q.pathname=='/'){
         //passing the file
        fs.readFile('Day 5/samplefrontend.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'}) //error code, type of file to display
            res.write(data) // content to display
            res.end()   //end of request
        })
    }else if(q.pathname== '/signup'){ //loginpage
        fs.readFile('Day 5/signup.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname== '/signupaction'){ //actionpage
        console.log(q.query)
        res.writeHead(200,{'Content-Type':'text/html'})
        let par=q.searchParams //
        let name=par.get("FName") //getting name
        res.write("<h1>"+"Welcome back "+name+"</h1?>")
        res.end()
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
   
   //portnumber ,, arrow fun for server running msg
}).listen(7000,()=>console.log("Server up and running"))

    