Zomapp

// Page 1
> List of city (GET)
*  http://localhost:9110/location
* https://nodebackend-oqga.onrender.com/location

> List of Restaurant (GET)
* http://localhost:9110/restaurants
* https://nodebackend-oqga.onrender.com/restaurants

> Rest wrt to city (GET)
* http://localhost:9110/restaurants?stateId=2
* https://nodebackend-oqga.onrender.com/restaurants?stateId=2

> Quick Search (GET)
* http://localhost:9110/mealType
* https://nodebackend-oqga.onrender.com/mealType


// Page 2
> Rest wrt to meal (GET)
* http://localhost:9110/filter/3
* https://nodebackend-oqga.onrender.com/filter/3


> Rest wrt to meal + cuisine (GET)
* http://localhost:9110/filter/2?cuisineId=1
* https://nodebackend-oqga.onrender.com/filter/2?cuisineId=1


> Rest wrt to meal + cost (GET)
* http://localhost:9110/filter/2?lcost=1000&hcost=2500
* https://nodebackend-oqga.onrender.com/filter/2?lcost=1000&hcost=2500


//page3
> Details of Restaurant (GET)
* http://localhost:9110/details/3
* https://nodebackend-oqga.onrender.com/details/3


> Menu of restaurant (GET)
* http://localhost:9110/menu/2
* https://nodebackend-oqga.onrender.com/menu/2

//page4
> Details of menu selected (POST)
* http://localhost:9110/menuDetails
* https://nodebackend-oqga.onrender.com/menuDetails
body> {"id":[11,21,13]}

> Place Order (POST)
* http://localhost:9110/placeOrder
* https://nodebackend-oqga.onrender.com/placeOrder
 {
        "orderId": 3,
        "name": "Nikita",
        "email": "nikki@gmail.com",
        "address": "Hom 65",
        "phone": 8934645457,
        "cost": 712,
        "menuItem": [
            23,14,15
        ],
        "status": "On The W"
    }



//page
> List all orders (GET)
* http://localhost:9110/orders
* https://nodebackend-oqga.onrender.com/orders
* http://localhost:9110/orders?email=nikki@gmail.com
* https://nodebackend-oqga.onrender.com/orders?email=nikki@gmail.com


> update order (PUT)
* http://localhost:9110/updateOrder
* https://nodebackend-oqga.onrender.com/updateOrder
> body{
        "_id":"66adfb5e63595ca01b10cf4a",
        "status":"Delivered"
    }


> delete order (DELETE)
* http://localhost:9110/deleteOrder
* https://nodebackend-oqga.onrender.com/deleteOrder
>  body{
        "_id":"66adfb5e63595ca01b10cf4a"
    }
