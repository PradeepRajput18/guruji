import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from './wishlistdata.service';
import { SandeepService } from './sandeep.service';
import { ServersideService } from './serverside.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _wishlistdata:WishlistdataService,
             private sandeepser:SandeepService,
             private serverside:ServersideService,
             private spinner:NgxSpinnerService,
             private socialAuthService: AuthService){
    this.nextCount();
    console.log("came");
  }
  title = 'ecom';
  public searched;
  public wishlist=[];
  public cart=[];
  public googleuser=false;
  onsearch(){
    this.searched=true;
  }
  offsearch(){
    this.searched=false
  }

    // prodetails
    details(index)
    {
      this._wishlistdata.send(this.products[index]);
    }

// ng on init
  // detailscomp=new Array()
  ngOnInit() {

    this._wishlistdata.user.subscribe(c=>{
      this.googleuser=c
      
    },err=>{console.log(err);
    })
    
    this._wishlistdata.count.subscribe(c => {
      this.wishlist=c;     
  });
  this._wishlistdata.cartpage.subscribe(c => {
    this.cart=c;
});

this.detailscomp=this.serverside.productduplicates()         // you should on it
     
}
nextCount() {
  this._wishlistdata.nextCount(); 
  this._wishlistdata.cartdetails(); 

} 

// for search option auto complete
detailscomp
// detailscomp=[ {_id: "5edcc1438ebc5c5480c869e5", name: "pistachio", rating: "4.3", cost: "150", original: "300", offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/uploads/1591525699670.jpg"},
//  {_id: "5edcc17a8ebc5c5480c869e6", name: "pistachio", rating: "4.3", cost: "200", original: "300",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc1a38ebc5c5480c869e7", name: "pistachio", rating: "4.3", cost: "150", original: "200",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc1a78ebc5c5480c869e8", name: "pistachio", rating: "4.3", cost: "150", original: "200",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc1b58ebc5c5480c869e9", name: "pistachio", rating: "4.3", cost: "100", original: "150",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc1ea8ebc5c5480c869ea", name: "Tea Powder", rating: "4.3", cost: "25", original: "33",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc21c8ebc5c5480c869eb", name: "Chilli Powder", rating: "4.3", cost: "300", original: "350",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc2578ebc5c5480c869ec", name: "Badam", rating: "4.4", cost: "200", original: "250",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc2918ebc5c5480c869ed", name: "Badam", rating: "4.4", cost: "25", original: "100",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc2a48ebc5c5480c869ee", name: "Badam india", rating: "4.4", cost: "500", original: "600",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
//  {_id: "5edcc2b18ebc5c5480c869ef", name: "Badam america", rating: "4.4", cost: "350", original: "600",  offer:"10%",button:"wishlist",carbutton:"Add to cart",carheart:"fa fa-heart-o",quant:"1kg",path:"/1591525699670.jpg"},
// ]
products=new Array()
  previousvalue
  noproducts=false
  previoussearch=new Array()
  lastkeypress=0
  search(event){
    let value=event.target.value
    console.log(value);
    console.log(value.length,"value x");
    if(this.previousvalue!=value){
      this.previousvalue=value
      if(this.products){
        console.log(value.length,"value ");
        // this.products.splice(0, this.products.length)
        this.noproducts=false
        this.products.length=0
      }
    }
    console.log(event.timeStamp-this.lastkeypress,"time calculation");
    
    if((event.timeStamp-this.lastkeypress)>200)
    {
      this.lastkeypress=event.timeStamp
      this.detailscomp.forEach((element)=>{
        if(element.name.toLowerCase()===value){
            this.products.push(element)
        }
        if(element.name.toLowerCase().includes(value)){
           this.products.push(element)
        }
      })
    }
    
    if(this.products.length===0){
      this.noproducts=true
    }
    if(value.length===0){
      console.log(value.length,"zero case");
      this.products.length=0
    }
  }

  

  // google signout

  signOut(): void {
    this.socialAuthService.signOut();
    console.log("signed out");
    this.googleuser=false
    this._wishlistdata.googledetails(false)

  }
}
