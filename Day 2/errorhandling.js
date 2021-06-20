try{
    a=10
    b=0
    if(b==0){
        throw "divide by zero error"
    }
}catch(err){
    console.log(err)
}finally{
    console.log("hello")
}