import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SandeepService } from './sandeep.service';
import { ServersideService } from './serverside.service';
import { WishlistdataService } from './wishlistdata.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {



  constructor(private sandeepser:SandeepService,private router:Router,private wishlist:WishlistdataService){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> |boolean {

    let b :boolean=false;
    b=this.sandeepser.LoggedIn()
    this.wishlist.user.subscribe(c=>b=!!c)
    if(b===false){ 
      alert("please login then you can access this page");
      this.router.navigate(['/login'])
    }
    console.log(b);

    return b
    
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
