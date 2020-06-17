let mongoose=require('mongoose')

let getimageschema=new mongoose.Schema({
    path:String,
    name:String,
    rating:String,
    cost:String,
    original:String,
    offer:String,
    button:String,
    carbutton:String,
    carheart:String,
    quant:String,
})

let imageschema=mongoose.model('getimage',getimageschema,"productdetails")

module.exports=imageschema