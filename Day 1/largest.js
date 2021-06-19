var read=require('readline-sync')

var num1= read.question("Enter the first number: ")
var num2= read.question("Enter the second number: ")
if(num1>num2){
    console.log(num1+ " is greater")
}else if(num1===num2){
    console.log("same value")
}else{
    console.log(num2+" is greater")
}