const express = require('express')
var nodemailer = require('nodemailer')
// const otp_module = require('./otp')
const router = express.Router()
const MC = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
var otpgen
var uemail
MC.connect(url,(err,db)=>
{
    if(err)
    {
        throw err
    }

    dbo = db.db('mydb')
    console.log('mydb created in forgotpassword.js');
})


router.post('/',(req,res)=>
{
    uemail = req.body.mail
    query = {email : uemail}
    console.log(uemail);
    dbo.collection("customers").find(query).toArray((err,result)=>{
        
        if (err) throw err

        if(result.length)
        {

             otpgen = Math.floor(100000 + Math.random() * 900000)
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: 'farmersassociation45@gmail.com',
                  pass: 'Countryman@1945'
                }
              })
              
              var mailOptions = {
                from: 'farmersassociation45@gmail.com',
                to: result[0].email,
                subject: 'OTP',
                text: "Your OTP to change password is " + otpgen
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response)
                }
              });

            //otp_module.methods.otpchecker(otpgen,result[0].email)
            // res.send(JSON.stringify("mail sent"))
            // res.send(JSON.stringify("exists"))
            res.json({msg:'exists', otp:otpgen})

        }

        else
        {
            // res.send(JSON.stringify("not exists"))
            res.json({msg:'not exists'})
        }
    })
})

router.post('/dbupdate',(req,res)=>
{
    // entered_otp = req.body.eotp
    ent_pass = req.body.epass
    query = {email: uemail}
    newquery = {$set: {password: ent_pass }}
    console.log(ent_pass, query.email)
    dbo.collection("customers").updateOne(query, newquery, (err, resl) =>{
        if (err) throw err;
        console.log("1 document updated");
        console.log(resl);
        
    });
    res.send(JSON.stringify("Success"))

})



module.exports=router