const express = require('express')
const router = express.Router()
const jwt =  require('jsonwebtoken')
const MC = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

MC.connect(url,(err,db)=>
{
    if(err)
    {
        throw err
    }

    dbo = db.db('mydb')
    console.log('mydb created in signup.js');
})

router.post('/',(req,res)=>
{
    console.log('in signup/ route')
    name = req.body.name.toLowerCase()
    email = req.body.email.toLowerCase()
    username = req.body.username
    password = req.body.password
    contact = req.body.phoneno
    query = {username:username}
    dbo.collection("customers").find(query).toArray((err,result)=>{

        if (err) throw err

        if(result.length)
        {
            console.log('User already exists. Please wait while we are redirecting')
            res.send(JSON.stringify("User already exists"))
        }
        else
        {
            uinfo = {name: name , email: email, username: username, password: password, contact: contact } 
            dbo.collection("customers").insertOne(uinfo,(err,reguser)=>{
                console.log('Document inserted successfully');
                let payload = {subject: reguser._id}
                let token = jwt.sign(payload, 'SecretKey')
                res.send({token})
            })
            //res.send({token})
        }
    })
    //res.send(JSON.stringify("Data received and inserted"))

})

module.exports = router