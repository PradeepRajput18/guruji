let express=require('express')
let router=express.Router()
let mongoose=require('mongoose')
let cors=require('cors')
let multer=require('multer')
let imageupload=require('../schemas/imageschema')
let productname
let catogeries=[]
let producttype
let type='food'
const fs = require("fs")
const storage =multer.diskStorage({
  destination:  (req, file, callBack) => {
    producttype=file.originalname.split('.')[0]
    console.log(producttype);
    
    //  const direcexist=catogeries.find(item=>{
    //    return item===producttype
    //  })

    //  if(direcexist){
    //   return callBack(null,`uploads/${producttype}/`)
    //  }else{
      // let dir = `./uploads/${producttype}/`
      let dir = `./uploads/`
    //   catogeries.push(producttype)
      return fs.mkdir(dir, error => callBack(null, dir))

    //  }  
  },
  filename: (req, file, callBack) => {
       let fileextention=file.originalname.split(".")[1]
       callBack(null, `${Date.now()+"."+fileextention}`)
  }
})


const upload = multer({ storage: storage })
 
// let upload = multer({ dest: 'uploads/' })

let sname,stype,spath

router.post('/',upload.single('photo'),async (req, res, next) => {
  const {
    file,
    body:{name,rating,cost,original,offer,button,carbutton,carheart,quant}
  }=req
  const File = req.file
  let filepath=req.file.path
  let file1path=filepath.split("\\")[1]
  let file2path=filepath.split("\\")[2]
  let totalpath=`/${file1path}`
  
  console.log(req.body.name,"hello world");
  console.log(req.file.path,"hello world");
  
  console.log(File,"requested body name");

  if (!File) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  else{
    // res.send(File);

    let n= new imageupload()
    n.name=req.body.name
    n.rating=req.body.rating
    n.cost=req.body.cost
    n.original=req.body.original
    n.offer=req.body.offer
    n.button=req.body.button
    n.carbutton=req.body.carbutton
    n.carheart=req.body.carheart
    n.quant=req.body.quant
    n.path=totalpath
    n.save(function(err,data){
      if(err){console.log(err,"error in mongo client")}
      else
      res.json(data)
    })
  }
   
})

router.post('/details',(req,res)=>{
  console.log("been called");
  
  
})


// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5 * 5
//   },
//   fileFilter: fileFilter
//  })





// router.post('/imagedata',(req,res)=>{
//   let n= new imageupload()
//   n.type=req.body.data.producttype
//   n.name=req.body.data.productname
//   n.image=req.body.imagedetails
//   console.log(req.body.data.producttype,"from image section division");
//   console.log(req.body.data.producttype,"from image section division");
//   n.save((err,data)=>{
//     if(err){console.log("data error from image")}
//     else
//     res.json(data)
//   })
  
// })

// router.get('/imagedata64',(req,res)=>{
//   imageupload.find()
//   .then((imagedata)=>{
//      console.log(imagedata);
//      res.sendFile(__dirname+'/dist/ecom/index.html')
//      res.json(imagedata)
//   })
//  .catch((err)=>{
//      console.log(err);
//  });
// })
module.exports=router







// for creating a new file

// fs.exists(dir,await( exist => {
//   if (!exist) {
//     return fs.mkdir(dir, error => callBack(error, dir))
//   }
//   return callBack(null, dir)
//   }))