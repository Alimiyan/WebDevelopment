const express= require('express')
const path = require('path')
const app = express()

//for body parsing,,getting the values
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//works between req and res
app.use(function(req,res,next){
    console.log("----------------------")
    console.log('working started')
    next() //didn't work the upcoming codes without calling this fun
})

app.get('/',(req,res,next)=>{
    res.send("Hello world")
    console.log("on index")
    next()
})


app.get('/about',(req,res,next)=>{
    res.send("this is the about page")
    console.log("on about")
    next()
})

app.get('/signup',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log("on signup")
    next()
})
app.post('/signup',(req,res,next)=>{
    var name=req.body.FName
    res.send("<h2>Hello there "+name+ "<h2>" )
   // console.log(name)
    console.log("on completed reg")
    next()
})
app.use((req,res)=>{
    console.log("working ended")
    console.log("----------------------")
})

app.listen(3000,()=>{
    console.log(__dirname)
    console.log(__filename)
    console.log('Server running ')
})