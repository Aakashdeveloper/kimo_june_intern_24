let express =  require('express')
let {dbConnect, getData,postData,
    updateData,
    deleteData} = require('./controller/dbController');
let app = express();
let port = 9110;
let cors = require('cors');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
let packageNumber = require('./package.json');
let {ObjectId} = require('mongodb')

swaggerDocument.info.version = packageNumber.version;
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

let key = "123Hdn4jwnd4o4"

app.use(express.json())
app.use(cors())

app.get('/health',(req,res) => {
    res.send('Hii From Express')
});

app.get('/location',async (req,res) => {
    let query = {};
    let collection = "location"
    let authKey = req.headers['x-access-auth']
    if(authKey == key){
        let output = await getData(collection,query)
        res.status(200).send(output)
    }else{
        res.status(401).send(`Unaunthorised`) 
    }
   
})


app.get('/mealType',async (req,res) => {
    let query = {}
    let collection = "mealType"
    let output = await getData(collection,query)
    res.send(output)
})

//restaurants
app.get('/restaurants',async(req,res) => {

    let query = {}
    let stateId = req.query.stateId;
    let collection = "restaurants";

    if(stateId){
        query={state_id:Number(stateId)}
    }else{
        query={}
    }

    let output = await getData(collection,query)
    res.send(output)
})

app.get('/filter/:mealId',async(req,res) => {
    let query = {}
    let mealId = Number(req.params.mealId)
    let cuisineId = Number(req.query.cuisineId)
    let hcost = Number(req.query.hcost)
    let lcost = Number(req.query.lcost)

    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(hcost & lcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {
            "mealTypes.mealtype_id":mealId
        }
    }
   

    let collection = "restaurants";;
    let output = await getData(collection,query);
    res.send(output)
})

///restDetails
app.get('/details/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {"restaurant_id":id}
    //let query = {_id:new ObjectId(req.params.id)}
    let collection = "restaurants"
    let output = await getData(collection,query)
    res.send(output)
})

//menu wrt to restaurants
app.get('/menu/:id',async(req,res) => {
    let query = {restaurant_id:Number(req.params.id)}
    let output = await getData('menu',query)
    res.send(output)
})

//menuDetails{"id":[1,2,3]}
app.post('/menuDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = 'menu'
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send(`Pleass pass data in format of {"id":[1,2,3]}`)
    }
})


//place order
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = 'orders'
    let response = await postData(collection,data);
    res.send(response)
})


// get orders
app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query = {email:req.query.email}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output) 
})

//update order
app.put('/updateOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new ObjectId(req.body._id) }
    let data ={
        $set:{
            "status":req.body.status
        }
    }
    let response = await updateData(collection,condition,data)
    res.send(response)
})

app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new ObjectId(req.body._id) }
    let response = await deleteData(collection,condition);
    res.send(response)
})



app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

