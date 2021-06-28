function add(num1,num2,callback){
    var err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}

function mul(num1,num2,callback){
    callback(num1*num2)
}

function div(num1,num2,callback){
    callback(num1/num2)
}

add(10,20,(sum, err)=>{
    if(err){
        console.log("first no is zero")
    }else{
        console.log("sum= "+sum)
        mul(sum,20,(mul)=>{
            console.log("product= "+mul)
            div(mul,10,(div)=>{
                console.log("division= "+div)
            })
        })
    }
    
})