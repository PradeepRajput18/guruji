// <img class="card-img-top" src="http://localhost:3000/product?qu={{post.path}}" alt="No image found" style="width:100%">

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {Iproduct} from '../interfaces/pro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WishlistdataService {
  private _teacherMessageSource = new Subject<any>();
  counter=0;
  x=[];
  y=[];
  z=[];
f:any;
p=[];
  public  a=[]
  count: BehaviorSubject<any>;
details: BehaviorSubject<any>;
cartpage: BehaviorSubject<any>;
pro: BehaviorSubject<any>;
pop: BehaviorSubject<any>;
user: BehaviorSubject<any>;
 public userdetails=[]
  constructor(private http: HttpClient) {
    
      this.count = new BehaviorSubject(this.x);
      this.details=new BehaviorSubject(this.y); 
      this.cartpage=new BehaviorSubject(this.z); 
      this.pro=new BehaviorSubject(this.a);   
      this.user=new BehaviorSubject("default value");   
  this. loadPost();
  }
  googledetails(message){
    this.user.next(message);
    this.userdetails=message
    console.log(message,"from");
    
  }
  googleuser(){
    return this.userdetails
  }

  loadPost(){
    this.http.get<any>("/productdetails").subscribe(data=>{
      this.a=data;
      console.log(this.a);
    }); 
}
product()
{
  this.pro.next(this.a); 
}
  // for wishlist
//send  data to wishlist
  sendMessage(message:any){
    this._teacherMessageSource.next(message);
    this.x.push(message);
  }
  //delete data from wishlist
  deletefromlist(id)
  {
    this.x = this.x.filter(item => item._id !== id);
  }
  nextCount() {
    this.count.next(this.x);
}

// for pro-details
  send(message:any){
    this._teacherMessageSource.next(message);
    this.y=message;
  }
 
nextCount1() { 
  this.details.next(this.y);  
}

// for cart
cart(message:any){
  this._teacherMessageSource.next(message);
  this.z.push(message);
}

cartdetails() {
  
this.cartpage.next(this.z);  
}

// for products
// change hearts in products page after deleting from wishlist
prodmsg(message:any,id:any){
 let  index = this.a.findIndex(x => x._id === id);
  this._teacherMessageSource.next(index);
  this.a[index].carheart="fa fa-heart-o";
}
// change cartbutton in products page after deleting from wishlist
prodmsg1(message:any,id:any){
  
  let  index = this.a.findIndex(x => x._id === id);
   this._teacherMessageSource.next(index);
   this.a[index].carbutton="Add To cart";
 }



}
