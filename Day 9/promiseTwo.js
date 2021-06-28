const promise= require('promise')

function getName(){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('alimiyan')
        },3000)
    })
}
function getAge(){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(21)
        },2000)
    })
}
//two functions can be called at same time
// promise.all([getName(),getAge()]).then((result)=>{
//     console.log(result)
// })

async function getUser(){
    let name= await getName()
    console.log(name)
    let age= await getAge()
    console.log(age)
}

getUser()