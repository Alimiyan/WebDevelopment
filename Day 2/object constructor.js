function person(name,age,phone){
    this.name=name
    this.age=age
    this.phone=phone
    this.display=function(){
        console.log("Name: "+this.name+" Age: "+this.age+" Phone: "+this.phone)
    }
}

var p1=new person("person 1",21,12345)
var p2=new person("person 2",24,43212)
p1.display()
p2.display()