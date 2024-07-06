//enclose something
//local scope
//global scope

// var a = 10 //global 
// function add(){
//     var b = 20 // local
//     return a+b
// }
// console.log(">>>>>>add>>>",add())
// console.log(">>>>>>a>>>",a)
// console.log(">>>>>>b>>>",b)

var a = 10 //global 
for(i=0;i<10;i++){
    let b = 20
    console.log(a+b+i)
}


console.log(">>>>>>a>>>",a)
console.log(">>>>>>b>>>",b)