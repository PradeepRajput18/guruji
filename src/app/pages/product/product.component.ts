import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import{Router} from '@angular/router';
import { WishlistdataService } from '../../services/wishlistdata.service';
import {Iproduct} from '../../interfaces/pro';
import {Iprice} from '../../interfaces/pro';
import {Irate} from '../../interfaces/pro';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // products:Iproduct[];
  // a:Iproduct[];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,
    private router:Router,private _wishlistdata:WishlistdataService){
      this.nextCount();
     
    
  }
  dropdownList1=[];
  dropdownList2=[];
  filterprice:Iprice[];
  filterrate:Irate[];
  selprice=[];
  selrate=[];
  seldry=[];
  ddsettings={};
  public f=[];
  public original=[];
  public filterp=[];
  public filterr=[];
  public filterd=[];
  ar=[];
  filtersettings={};
  filterpricesettings={};
  allpost=[];
  notEmptyPost=true;
  notscrolly=true;
   public wish=[];
 public a=[];
 public products=[];
 public wishlist=[];

  ngOnInit(){
  //   this._wishlistdata.count.subscribe(c => {
  //     this.wishlist=c;
     
  // });
    // this._wishlistdata.productdetails().subscribe(data=>{
    //   this.products=data
    //   this.a=this.products;
    //   console.log(this.a);
    // })
  
    this.timer();
// get the products
this._wishlistdata.pro.subscribe(c => {
  this.a=c;
  this.products=c;
});

   
    this.dropdownList1=[
      {id:1,name:"Badam"},
      {id:2,name:"pistachio"},
      {id:3,name:"Avacado"},
      {id:4,name:"Cashew"},
      {id:5,name:"Nuts"} 
    ];
    this.dropdownList2=[
      {id:6,name:"Chilli Powder"},
    ];
    this.filterprice=[
      {item_id:0,item_text:"800-1000",min:800,max:1000},
      {item_id:1,item_text:"600-800",min:600,max:800},
      {item_id:2,item_text:"400-600",min:400,max:600},
      {item_id:3,item_text:"below 400",min:0,max:400},
    ];
    this.filterrate=[
      {item_id:1,item_text:"1⭐ and above"},
      {item_id:2,item_text:"2⭐ and above"},
      {item_id:3,item_text:"3⭐and above"},
      {item_id:4,item_text:"4⭐and above"},  
    ]
this.filterpricesettings={
  singleSelection:true,
  idField:"item_id",
  textField:"item_text",
  selectAllText:"Select All",
  unSelectAllText:"unselect All",
  itemsShowLimit:4,
  allowSearchFilter:true
}
    this.filtersettings={
      singleSelection:false,
      idField:"id",
      textField:"name",
      selectAllText:"Select All",
      unSelectAllText:"unselect All",
      itemsShowLimit:4,
      allowSearchFilter:true
    };

    this.ddsettings={
      singleSelection:false,
      idField:"item_id",
      textField:"item_text",
      selectAllText:"Select All",
      unSelectAllText:"unselect All",
      itemsShowLimit:5,
      allowSearchFilter:true
    };
  
    

this. loadInitPost();
  }
  nextCount() {
    this._wishlistdata.product();  
  }
  loadInitPost(){
   console.log(this.a);
      this.allpost=this.a;
      this.original=this.a;
      this.products=this.a;
      this.filterp=this.products;
      this.filterr=this.products;
      this.filterd=this.products;
    
      // console.log(this.allpost); 
  
}


  fp(max:number,min:number){
    // console.log(this.products);
    return this.products.filter(t=>t.cost>=min && t.cost<=max)
    }

    fr(m:number)
    {
      return this.products.filter(t=>t.rating>=m)
    }
  onitemselprice(item:any)
  {
    if(this.selprice.length){
          // console.log("maximum value is"+this.filterprice[0].max);
          if(this.selprice[0].item_id==0){
            this.filterp=this.fp(this.filterprice[0].max,this.filterprice[0].min);
          }
          if(this.selprice[0].item_id==1){
            this.filterp=this.fp(this.filterprice[1].max,this.filterprice[1].min);
          }
          if(this.selprice[0].item_id==2){
            this.filterp=this.fp(this.filterprice[2].max,this.filterprice[2].min);
          }
          if(this.selprice[0].item_id==3){
            this.filterp=this.fp(this.filterprice[3].max,this.filterprice[3].min);
          }
       }   
       this.filters(this.filterp,this.filterr,this.filterd);
  }
  onItemDeSelectprice(item:any){
    this.filterp = this.products;
    this.filters(this.filterp,this.filterr,this.filterd);
  }
  onitemselrat(item:any)
  {
    if(this.selrate.length){
          let m=this.selrate[0].item_id;
          this.filterr=this.fr(m)
        }
        this.filters(this.filterp,this.filterr,this.filterd);
  }
  onItemDeSelectrat(item:any){
    this.filterr = this.products;
    this.filters(this.filterp,this.filterr,this.filterd);
  }
  onitemseldry(item:any)
  {
    var i,j;
    let c;
     this.f=[];
  for(i=0;i<this.seldry.length;i++)
  {
    let   k=this.products;
    for(j=0;j<k.length;j++)
    {
    if(this.seldry[i].name===k[j].name)
    {
      c=(k[j]);
      this.f.push(c);
    }
  }
  }
  if(this.seldry.length===0)
  {
    this.f=this.products;
  }
  this.filterd=this.f;
  
  this.filters(this.filterp,this.filterr,this.filterd);
  }
onitemselalldry(items:any)
{
let p=[];
console.log("items",items);
p=(items);
var i,j;
let c;
let v=[];
if(items.length===0)
{
  v=this.products;
}
else{
for(i=0;i<p.length;i++)
{
  let   k=this.products;

  for(j=0;j<k.length;j++)
  {
  if(p[i].name===k[j].name)
  {
    v.push(k[j]);
    console.log(v)
  }
}
}
}
this.filterd=v;
this.filters(this.filterp,this.filterr,this.filterd);
}
  
onItemDeSelectalldry(items:any)
{
  this.filterd=this.products;
  this.filters(this.filterp,this.filterr,this.filterd);
}
filters(p,r,d)
{
  
  console.log(p,r,d);
  let fil=[];
  let f=0;
  let c;
  let g;
  this.a=[];
  for(var i in p){
    for(var j in r){
        if(p[i]._id === r[j]._id ){
          c=p[i];
           fil.push(c);
      
         }
        
    } 
    
 }
 console.log(fil);
 for(var i in fil){
  for(var j in d){
      if(fil[i]._id === d[j]._id ){
         this.a.push(fil[i]);
         f++;
        }
       
  }

}
if(f===0)
{
  this.a=[];
}
this.allpost=this.a;

// this.loadInitPost();
}

    onselallprice(items:any){
      console.log(items);
    }

onScroll()
  {
    if(this.notscrolly && this.notEmptyPost)
    {
      this.spinner.show();
      this.notscrolly=false;
      this.loadNextPost();
    }
  }
  x:any
  days :number  
  hours:number   
  minutes :number
  seconds :number
  time
   year = new Date().getFullYear();
  expireday = new Date(this.year, 5, 26).getTime();
  timer(){
      const today = new Date().getTime();
      this.time = this.expireday - today;
  
    if(this.time>0){
      this.x=setInterval(()=>{
        this.time--;
       this.days   = Math.floor(this.time / (1000 * 60 * 60 * 24));
       this.hours   = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));    
       this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);
      });
    }
  }
  
 
loadNextPost()
  {
    const lastpost=this.allpost[this.allpost.length-1];
    const lastpostid=lastpost.id;
    const dataTosend = new FormData();
    dataTosend.append('id',lastpostid);
    this.http.post('/productdetails',dataTosend)
    .subscribe((data:any)=>{
      const newpost=data[0];
    this.spinner.hide();
  
    if(newpost.length===0)
    {
      this.notEmptyPost=false;
    }
    this.allpost=this.allpost.concat(newpost);
    this.notscrolly=true;
    });
  }
// to wishlist
  sendpic(id,index)
  {
    if(this.a[index].carheart=="fa fa-heart-o")
      {
      this.a[index].carheart= "fa fa-heart";
      this._wishlistdata.sendMessage(this.a[index]);
      console.group("add",id);
      }
      else{
      //  navbar count
        this._wishlistdata.deletefromlist(id);  
        this.a[index].carheart= "fa fa-heart-o";
        this._wishlistdata.count.subscribe(c => {
          this.wishlist=c;
         
      });
      this._wishlistdata.nextCount();  
      }
    
  }
  // prodetails
  details(index)
  {
    this._wishlistdata.send(this.a[index]);
  }

 
  // to cart
  senddata(id)
{
  let  index = this.original.findIndex(x => x._id === id);
  console.log(index,id);
  if( this.original[index].carbutton==="go to cart")
  {
    this.router.navigate(['cart']);

  }
  else{
   
    this.original[index].carbutton= "go to cart";
  this._wishlistdata.cart(this.allpost[index]);
 
    
  }
}

}