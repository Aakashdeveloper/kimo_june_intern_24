var city = "amSterDam"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[1]
'm'



var a = "John"
var b = "joHn"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amSterDam"
undefined
city.charAt(0)
'a'
city.charAt(1)
'm'
city.slice(1)
'mSterDam'
city.slice(2)
'SterDam'
city.slice(2,4)
'St'
city.slice(2,5)
'Ste'


var city = "amSterDam"

var city = "amSterDam"
undefined
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mSterDam'

city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'


var uname = "   Nikita   "
undefined
uname.length
12
uname.trim()
'Nikita'