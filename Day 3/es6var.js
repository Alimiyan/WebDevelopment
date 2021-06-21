let num=10  //used to prevent reuse of variables
//let num=2
var hello=50
var hello=340
console.log(num)
console.log(hello)

console.log("----------------------------")

function fun(){
    var i=0
    if(i==0){
        var sample=100     /// 'let' can only be accessed inside a block
        //let a=200        ///  
    }
   // console.log(a)
    console.log(sample)
}
fun()

console.log("----------------------------")

const yy=100
//cant change the value for constant
const list=['apple','mango','grapes']
list.push('strawberry')
console.log(list)
//we can add items to the list, but can't replace the whole list
console.log("----------------------------")

function sam(num1=100,num2){// added a default parameter
    console.log(num1+num2)
}
sam(undefined,40)