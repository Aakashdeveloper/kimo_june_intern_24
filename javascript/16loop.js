for
while
do while
for of > Array
for in > Object


> iterate over the array and can also generate the series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


let a = ['Delhi', 'Helsinki', 'Innsburg', 'Boston', 'Amsterdam', 'Hongkong', 'London']

for(i=0;i<a.length;i++){
    console.log(a[i])
}
Delhi
VM1068:4 Helsinki
VM1068:4 Innsburg
VM1068:4 Boston
VM1068:4 Amsterdam
VM1068:4 Hongkong
VM1068:4 London

/////
var i = 10
while(i<5){
    console.log(i);
    i++
}


var i = 10
do{
    console.log(i);
    i++
}
while(i<5)


////////
let city = ['Delhi', 'Helsinki', 'Innsburg', 'Boston', 'Amsterdam']
for(mycity of city){
    console.log(mycity)
}
