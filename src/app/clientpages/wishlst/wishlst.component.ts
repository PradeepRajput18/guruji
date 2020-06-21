import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../../services/wishlistdata.service';

@Component({
  selector: 'app-wishlst',
  templateUrl: './wishlst.component.html',
  styleUrls: ['./wishlst.component.css']
})
export class WishlstComponent implements OnInit {

  constructor(private _wishlistdata:WishlistdataService) {
    this.nextCount();
   }
public x=false;
public p;
public  people=[];
  public val;
 
  ngOnInit() {
    this._wishlistdata.count.subscribe(c => {
      this.people=c;
     
  });
  if(this.people.length > 0)
  {
    this.val=true;
    console.log(this.people.length);
  }
}

nextCount() {
  this._wishlistdata.nextCount();  
}  
    addNew(index,id){
    this._wishlistdata.prodmsg(index,id);
    this.people.splice(index,1);
    if(this.people.length === 0)
    {
      this.val=false;
    }
    }
  
  }
  