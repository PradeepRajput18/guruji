import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressesComponent } from './addresses/addresses.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WishlstComponent } from './wishlst/wishlst.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';
import { AddformComponent } from './addform/addform.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { CatComponent } from './cat/cat.component';
import { MainComponent } from './main/main.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { UserGuard } from './user.guard';
import { CanActivate} from '@angular/router';
 
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  //done
  {path:'home',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addwish',component:WishlstComponent},
  {path:'cart',component:MycartComponent},
  {path:'about',component:AboutusComponent},
  {path:'wishlist',component:MywishlistComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'otp',component:OtpComponent},
  {path:"suggestion",component:SuggestionComponent},
//need to be done
  {path:'account',component:PersonalinfoComponent,
    // children:[
    //   {path:'address',component:AddressesComponent},
    //   {path:'orders',component:OrdersComponent},
    //   {path:'wishlist',component:WishlistComponent},
    // ]
  },
  {path:'orders',component:OrdersComponent,canActivate: [UserGuard]},
  {path:'personalinfo',component:PersonalinfoComponent,canActivate: [UserGuard]},


//noneed
    {path:'form',component:AddformComponent},
    {path:'address',component:AddressesComponent,canActivate: [UserGuard]},

    
//teja
    {path:'proDetails',component:ProDetailsComponent},
    {path:'cat',component:CatComponent},
    {path:'ma',component:MainComponent},
    {path:'product',component:ProductComponent},
    {path:'**',component:PagenotfoundComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const singlecomponent=[LandingComponent,AccountComponent,SignupComponent,LoginComponent,
  OrdersComponent,AddressesComponent,ProDetailsComponent,CatComponent,MainComponent,AddformComponent,ProductComponent,MycartComponent,WishlstComponent,MywishlistComponent,PersonalinfoComponent,AboutusComponent,PagenotfoundComponent];
