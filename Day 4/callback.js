var dt= new Date()
console.log("start")
for(i=0;i<10;i++){
    console.log("loop")
}
console.log("end")
var diff=new Date()-dt
console.log("time taken to run the program= "+diff)

// 
function longTast(millisec){
    dt=new Date()
    while((new Date()-dt) <= millisec){
    }
}

for(j=0;j<=3;j++){
    console.log("started")
    longTast(1000)
    console.log("ended")
}
///////////
console.log("----------------------------------")
console.log("----------------------------------")
/////////

function showEnd(){
    console.log("ended")
}
console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

///////////
console.log("----------------------------------")
console.log("----------------------------------")
/////////

var first= function(data){
    console.log("Data= "+data)
}
var second= function(callback){
    callback("Hello world")
}
second(first)