var a = 10
var b = 20
a+b
30

keyword nameoffunction(parameter){
    keyword
}

function add(a,b){
    return a+b
}

add(1,2)
add(1,2)
3
add(4,7)
11

add("hii","bie")
'hiibie'


function isEven(userInput){
    let out;
    if(userInput%2==0){
        out = `${userInput} is even`
    }else{
        out = `${userInput} is odd`
    }

    return out
}

isEven(10)
'10 is even'
isEven(11)
'11 is odd'


//es6
let add = (a,b) => {return a+b}
add(1,2)
3