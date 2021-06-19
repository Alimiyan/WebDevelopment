num=10
function sample(){
    num=20   ///////// if we add var before num then it becomes local variable and the global variable does'nt change
    function hey(){
        num=40
    }
    hey()
}
sample()
console.log(num)