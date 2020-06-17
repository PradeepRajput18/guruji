const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const MC = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MC.connect(url,(err,db)=>
{
    if(err)
    {
        throw err
    }

    dbo = db.db('mydb')
    console.log('mydb created in login.js');
})

router.post('/',(req,res)=>
{
    console.log('in login.js');
    name = req.body.name
    //email = 
    password = req.body.password
    query = {username:name}

    dbo.collection('customers').find(query).toArray((err,result)=>{

        if (err) throw err
        
        if(result.length)
        {
           if (password === result[0].password)
           {
               let payload = {subject: result[0]._id}
               let token = jwt.sign(payload, "SecretKey")
               console.log('Login successful');
               res.send({token})
           }
           else
           {
               console.log('Incorrect Password');
               res.send(JSON.stringify("Incorrect Password"))

           }
        }
        else
        {
            res.send(JSON.stringify("No user found. Please register"))
        }
    })
})


module.exports = router