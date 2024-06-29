Map
> Map help to iterate over the array
> it always return same length of output as input array
> it is use to apply logic

let myarry = [1,2,3,4,5]

myarry.map((data) =>{  return data*2})
[2, 4, 6, 8, 10]



filter
> help to filter out the value
> it may or may not return same length of output as input
> it only return those value for which condition is true

var mydata = [8,9,5,34,87,23,12,4]
mydata.filter((data) => {return data>20})
[34, 87, 23]

var mydata = [8,9,5,34,87,23,12,4]
mydata.map((data) => {return data>20})
[false, false, false, true, true, true, false, false]



var a = [0,1,2,3]
a.map((data) => {return data*2})
[0,2,4,6]

a.filter((data) => {return data*2})
[1, 2, 3]