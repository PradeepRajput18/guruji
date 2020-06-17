const express=require('express');
const bodyparser=require('body-parser')
let router=express.Router()
let mongoose=require('mongoose')
const path=require('path')
let app=express()
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname,'dist/ecom')))
// app.use("/personalinfo",express.static('uploads'))
app.use(bodyparser.urlencoded({
    extended:true
}))

// const signin=require('./requests/userlsigninreq')
// const logincheckuser=require('./requests/userchecklogin')
const uploadimages=require('./requests/imageupload')
const getimagedetails=require('./requests/getimages')
const signup = require('./server/signup')
const login = require('./server/login')
const forgotpassword = require('./server/forgotpassword')

app.get('/product',function(req,res)
{
  var path1=path.join(__dirname,'/uploads')
  var path2=path1+req.query['qu']
  res.sendFile(path2)
})


// const stripe=require('./requests/stripe')
// app.use('/signupdata',signin)  //connected to the sign up component
// app.use('/userlogincheck',logincheckuser)  // connected to login component
app.use('/uploadimages',uploadimages)  // connected to address component 
// app.use('/phonenumber',smssender)  // connected to dup component and recaptcha is there
app.use('/productdetails',getimagedetails)  // connected to personalinfo to get images from server
app.use('/signupfrm',signup)
app.use('/ulgn',login)
app.use('/fgtpassw',forgotpassword)

 //connected to product info stripe
// node wild cart loading
app.get('/**',(req,res)=>{
  res.sendFile(__dirname+'/dist/ecom/index.html')
})

let url = "mongodb://localhost:27017/E-commerce";


mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
     if(err) throw err
     else console.log("Collection created!");
})


app.listen(3000,()=>{
console.log("server connected to 3000");
})
