let express=require('express')
let router=express.Router()

let imageschema=require('../schemas/getimage.js')

router.get('/',(req,res)=>{
    imageschema.find({})
    .then((data)=>{
    //    console.log(data);
        // res.sendFile(__dirname+'/dist/ecom/index.html')
       res.json(data)
       console.log("datafrom server");
     })
    .catch((err)=>{
      console.error(err);
    })
})

router.get('/images/:path',(req,res)=>{
  console.log("entered")
  res.sendFile('../uploads/'+req.params.path)
})
module.exports=router