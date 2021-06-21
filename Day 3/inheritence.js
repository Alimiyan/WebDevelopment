class hello{
    sample(){
        console.log("hello world")
    }
}
class cal extends hello{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    display(){
        console.log("sum= "+(this.num1+this.num2))
    }
}
let cl=new cal(10,40)
cl.display()
cl.sample()