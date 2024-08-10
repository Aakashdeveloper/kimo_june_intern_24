let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');
let User = require('../model/userModel');

router.use(express.json());

//get All Users
router.get('/users',async(req,res)=>{
    let response = await User.find({});
    res.send(response)
})

//register User
router.post('/register',async(req,res) => {
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    await User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    })
    res.send('Registration Successful')
})

//loginUser
router.post('/login',async(req,res) => {
    let data = await User.findOne({email:req.body.email})
    if(!data){
        res.send({auth:false,token:'No User Found Register First'})
    }else{
        const passIsValid = bcrypt.compareSync(req.body.password,data.password);
        if(!passIsValid){
            res.send({auth:false,token:'Invalid Password'})
        }
        // generate token in case both username and password correct
        let token = jwt.sign({id:data._id},config.secert,{expiresIn:86400})
        res.send({auth:true,token:token})
    }
})

//userinfo
router.get('/userInfo',async(req,res) => {
    let token = req.headers['x-access-token'];
    console.log(token) 
    if(!token){
        return res.send({auth:false,token:'No Token Found'})
    }
    jwt.verify(token,config.secert,async(err,data) => {
        if(err){
            return res.send({auth:false,token:'Invalid Token Found'})
        }
        let output = await User.findById(data.id)
        res.send(output)
    })
})

module.exports = router