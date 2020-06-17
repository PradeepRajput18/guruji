let mongoose=require('mongoose')

let userschema=new mongoose.Schema({
    path:String,
    name:String,
    rating:Number,
    cost:Number,
    original:String,
    offer:String,
    button:String,
    carbutton:String,
    carheart:String,
    quant:String,
})

let imageupload=mongoose.model('imageuploaddetails',userschema,"productdetails")

module.exports=imageupload