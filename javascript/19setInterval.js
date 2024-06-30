setInterval(function(){},time)

function random(){
    console.log(Math.random())
}


let myNumber = setInterval(function(){
    random()
},3000)

0.10726723020513584
VM47:2 0.269546707610957
VM47:2 0.26192475737742327
VM47:2 0.6154919395273828
VM47:2 0.2550370245427682
clearInterval(myNumber)



setTimeout(function(){},time)

function random(){
    console.log(Math.random())
}


setTimeout(function(){
    random()
},3000)