const express= require('express')
const path = require('path')
const app = express()
//works between req and res
app.use(function(req,res,next){
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

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})
app.post('/signup',(req,res)=>{
    res.send("Successfully Registered")
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