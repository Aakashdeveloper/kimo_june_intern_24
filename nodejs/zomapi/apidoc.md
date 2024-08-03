Zomapp

// Page 1
> List of city (GET)
*  http://localhost:9110/location

> List of Restaurant (GET)
* http://localhost:9110/restaurants

> Rest wrt to city (GET)
* http://localhost:9110/restaurants?stateId=2

> Quick Search (GET)
* http://localhost:9110/mealType


// Page 2
> Rest wrt to meal (GET)
* http://localhost:9110/filter/3


> Rest wrt to meal + cuisine (GET)
* http://localhost:9110/filter/2?cuisineId=1


> Rest wrt to meal + cost (GET)
* http://localhost:9110/filter/2?lcost=1000&hcost=2500


//page3
> Details of Restaurant (GET)
* http://localhost:9110/details/3


> Menu of restaurant (GET)
* http://localhost:9110/menu/2

//page4
> Details of menu selected (POST)
* http://localhost:9110/menuDetails
body> {"id":[11,21,13]}

> Place Order (POST)
* http://localhost:9110/placeOrder
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
* http://localhost:9110/orders?email=nikki@gmail.com


> update order (PUT)


> delete order (DELETE)
