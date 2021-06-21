class cal{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    sum(){
        console.log("sum= "+(this.num1+this.num2))
    }
}
let cl=new cal(10,40)
cl.sum()