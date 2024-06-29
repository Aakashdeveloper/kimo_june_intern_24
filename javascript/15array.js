Array is a collection of homogenious as well a hetrogenious data type

let a = [1,5,6,43,3443,23] >> Array of Number
let b = ["Hii","Bie","test"]>>> Array of String
let c = [true,false,false,true] >> Array of Boolean

let d = [1,4,true,"dfvdf",34,false,"dds"]

let city = ["Delhi","Helsinki","Mumbai","Pune"]
city.length
4
city[0]
'Delhi'
city[1]
'Helsinki'
city[1]
'Helsinki'
city[city.length-1]

let city = ["Delhi","Helsinki","Mumbai","Pune"]
undefined
city.push('Amsterdam')
5
city
(5) ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam']
city.push('London')
6
city
(6) ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']


let city = ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']

city
(6) ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']
city.pop()
'London'
city

['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam']

city.pop(2)
'Amsterdam'

city
(4) ['Delhi', 'Helsinki', 'Mumbai', 'Pune']
city.unshift('Indore')
5
city
(5) ['Indore', 'Delhi', 'Helsinki', 'Mumbai', 'Pune']
city.shift()
'Indore'


push > add in the end of Array
unshift > add in the beginning of Array
pop > remove the last value
shift > remove the first value


let city = ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']
city.slice(1)
(5) ['Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']
city.slice(2)
(4) ['Mumbai', 'Pune', 'Amsterdam', 'London']
city.slice(-1)
['London']
city.slice(-2)
(2) ['Amsterdam', 'London']
city.slice(2,5)
(3) ['Mumbai', 'Pune', 'Amsterdam']



let city = ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']
city.splice(index,deletecount,value you want to add)


let city = ['Delhi', 'Helsinki', 'Mumbai', 'Pune', 'Amsterdam', 'London']

# Remove 1 value from index number 3
city.splice(3,1)
['Pune']

# Do not remove value but add 1 value at index number 4
city.splice(4,0,'Hongkong')

city
(6) ['Delhi', 'Helsinki', 'Mumbai', 'Amsterdam', 'Hongkong', 'London']

# Remove 1 value from index number 2 and add two values
city.splice(2,1,'Innsburg','Boston')
['Mumbai']

city
(7) 

let a = ['Delhi', 'Helsinki', 'Innsburg', 'Boston', 'Amsterdam', 'Hongkong', 'London']
undefined
a.indexOf('Mumbai')
-1
a.indexOf('Indore')
-1
a.indexOf('London')
6
a.indexOf('Delhi')
0
a.indexOf('Boston')