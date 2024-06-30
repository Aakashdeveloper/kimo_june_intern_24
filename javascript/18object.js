var movieName = "Jab we met"
var movieRating = 4.7
var movieInd = "Bollywood"

var movieName1 = "Avengers"
var movieRating1 = 4.2
var movieInd1 = "Hollywood"

var a = {} //object

var movie = {
    name :"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}
undefined
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood'}
movie.name
'Jab We Met'
movie.rating
4.7
movie.ind
'Bollywood'
movie['ind']
'Bollywood'
movie.type="Romantic"
'Romantic'
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood', type: 'Romantic'}
movie.rating=4.6
4.6
movie
{name: 'Jab We Met', rating: 4.6, ind: 'Bollywood'}
delete movie.ind
true
movie
{name: 'Jab We Met', rating: 4.6}

JSON
> JavaScript Object notation
> Array of Object
> Key value pair of data

let data = [
    {
        name :"Jab We Met",
        rating:4.7,
        ind:"Bollywood"
    },
    {
        name :"Avengers",
        rating:4.5,
        ind:"Hollywood"
    }
]

data.map((item) =>  {return item.name})




var movie = {
    name :"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}
name
rating
ind



var movie = {
    name :"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(movie[key])
}
Jab We Met
4.7
Bollywood