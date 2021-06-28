const { reject, resolve } = require('promise')
const promise=require('promise')

function add(num1,num2){
    return new promise((resolve, reject)=>{
        if(num1==0 || num2==0){
            reject("error in addition")
        }
        resolve(num1+num2)
    })
}

function mul(num1,num2){
    return new promise((resolve, reject)=>{
        if(num1==0 || num2==0){
            reject("error in multiplication")
        }
        resolve(num1*num2)
    })
}

function div(num1,num2){
    return new promise((resolve, reject)=>{
        if(num1==0 || num2==0){
            reject("error in division")
        }
        resolve(num1/num2)
    })
}

//chaining
add(10,20).then((sum)=>{
    console.log('sum='+sum)
    return mul(sum,30)
}).then((product)=>{
    console.log("product"+product)
    return div(product,10)
}).then((division)=>{
    console.log('division='+division)
})
.catch((err)=>{
    console.log(err)
})