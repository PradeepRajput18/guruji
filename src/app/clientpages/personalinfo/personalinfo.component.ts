import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../../services/wishlistdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  constructor(private _wishlistdata:WishlistdataService,private router:Router) { }
  googleuser=[];
  fname
  lname
  name
  ngOnInit() {
    this._wishlistdata.user.subscribe(c=>{
      this.googleuser.push(c)
      this.name=this.googleuser[0].name
      this.fname=this.name.split(" ")[1]
      this.lname=this.name.split(" ")[0]
     console.log(c,"hey i am google details oka na");
     console.log(this.googleuser,"hey i am google pro details oka na");
    //  this.router.navigate(['/personalinfo'])
    },err=>{console.log(err);
    })
  }

 
  

}
