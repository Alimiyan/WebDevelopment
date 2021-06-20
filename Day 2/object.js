var person={name:"alimiyan",age:21,place:"ekm",
    display: function(){
        console.log(this.name)
    }
}
//console.log(person.name)
//console.log(person['age'])
//person.name='demo'
for(x in person){
    console.log(person[x])
}

console.log("----------------------")

console.log(person.display())
person.phone=12434
person.displayhello=function(){
    console.log("hello")
}
console.log(person)
console.log(person.displayhello())