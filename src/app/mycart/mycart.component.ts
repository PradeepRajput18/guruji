import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
// public price:number ;
//  public p:number=156;
 public update;
//  public tax:number=25;
 public total:number[]=[]
 public priceTotal:number=0
  constructor(private _wishlistdata:WishlistdataService,) { 
    this.nextCount();
    // this.quality(1,);
    
  }
   public cartarr=[];
   public val;
public o;
public hearttype;
public wishlist=[];
  ngOnInit(): void {
    this._wishlistdata.cartpage.subscribe(c => {
      this.cartarr=c;
     this.o=this.cartarr.length;
    
  });
  if(this.cartarr.length > 0)
  {
    this.val=true;
    console.log(this.cartarr.length);
    for(var k=0;k<this.cartarr.length;k++){
      this.total[k]=this.cartarr[k].cost
      this.priceTotal=this.priceTotal+parseInt(this.cartarr[k].cost)
    }
  }
  }
  quality(q,id,i){
    let  index = this.cartarr.findIndex(x => x.id === id);
    let j=this.total[i]
    this.total[i]=q*(this.cartarr[i].cost);
    // console.log("came",this.cartarr[index].cost);
    // console.log(this.price);
    // i=true;
    this.priceTotal=this.priceTotal+this.total[i]-j
  }
  nextCount() {
    this._wishlistdata.cartdetails();  
  } 


  addNew(index,id){
    this._wishlistdata.prodmsg(index,id);
    this.priceTotal=this.priceTotal-this.total[index]
    this.cartarr.splice(index,1);
    this.total.splice(index,1);
    if(this.cartarr.length === 0)
    {
      this.val=false;
    }   
    }
    
   



    Changeheart(index,id)
    {
      if(this.cartarr[index].carheart=="fa fa-heart-o")
      {
      this.cartarr[index].carheart= "fa fa-heart";
      this._wishlistdata.sendMessage(this.cartarr[index]);
      }
      else{
        this.cartarr[index].carheart= "fa fa-heart-o";
        this._wishlistdata.deletefromlist(id);
        this._wishlistdata.count.subscribe(c => {
          this.wishlist=c;
         console.log("here",this.wishlist);
      });
      this._wishlistdata.nextCount(); 
        
        
      }
    }
}
