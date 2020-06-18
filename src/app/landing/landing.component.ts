import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';
import{Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { ServersideService } from '../serverside.service';
import { SandeepService } from '../sandeep.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _wishlistpopular:WishlistdataService, 
     private router:Router,
     private _wishlistdata:WishlistdataService,
     private socialAuthService: AuthService,
     private serverside:ServersideService,
    private sandeepser:SandeepService
    ) { 
    this.timer();
    this.nextCount();
  }

  googleuser=false;

public items:any
public popular:any;
  ngOnInit() {
          this._wishlistdata.pro.subscribe(c => {
            this.popular=c;
            this.popular.length=8

        });
        this._wishlistdata.user.subscribe(c=>{
          this.googleuser=c
        },err=>{console.log(err);
        })
  }
  customerscount=1000;
  start;
  count(){
    this.customerscount++;
  }
  timer(){
    this.start=setInterval(()=>{
         this.customerscount=this.customerscount+10;
    },100)
  }
  details(index)
  {
    this._wishlistpopular.send(this.popular[index]);
  }
  public testMe() {
    // window.open( "aboutus" );
    // this.router.navigate(['/aboutus'])
  }
  senddata(index)
{
  
  if( this.popular[index].carbutton==="go to cart")
  {
    this.router.navigate(['cart']);

  }
  else{
   
    this.popular[index].carbutton= "go to cart";
    // this.sendtocart.push(this.popular[index]);
  this._wishlistpopular.cart(this.popular[index]);
 
    
  }
} 
nextCount() {
  this._wishlistdata.product();  
}


// socil login

public socialSignIn(socialPlatform : string) {
  let socialPlatformProvider;
  if(socialPlatform == "facebook"){
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  }else if(socialPlatform == "google"){
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  } else if (socialPlatform == "linkedin") {
    // socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
  }
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform+" sign in data : " , userData);
      // Now sign-in with userData
      // ...
      this._wishlistdata.googledetails(userData)
      this.router.navigate(['/personalinfo'])
          
    }
  );
}
}
