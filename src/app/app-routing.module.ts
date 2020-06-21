import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './autentication/signup/signup.component';
import { LoginComponent } from './autentication/login/login.component';
import { OrdersComponent } from './clientpages/orders/orders.component';
import { AddressesComponent } from './clientpages/addresses/addresses.component';
import { PersonalinfoComponent } from './clientpages/personalinfo/personalinfo.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PagenotfoundComponent } from './Basicandtesting/pagenotfound/pagenotfound.component';
import { WishlstComponent } from './clientpages/wishlst/wishlst.component';
import { MycartComponent } from './clientpages/mycart/mycart.component';
import { ProductComponent } from './pages/product/product.component';
import { ProDetailsComponent } from './pages/pro-details/pro-details.component';
import { CatComponent } from './pages/cat/cat.component';
import { OtpComponent } from './autentication/otp/otp.component';
import { ForgotpasswordComponent } from './autentication/forgotpassword/forgotpassword.component';
import { SuggestionComponent } from './Basicandtesting/suggestion/suggestion.component';
import { UserGuard } from './guards/user.guard';
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
    {path:'address',component:AddressesComponent,canActivate: [UserGuard]},

    
//teja
    {path:'proDetails',component:ProDetailsComponent},
    {path:'cat',component:CatComponent},
    {path:'product',component:ProductComponent},
    {path:'**',component:PagenotfoundComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const singlecomponent=[LandingComponent,AccountComponent,SignupComponent,LoginComponent,
  OrdersComponent,AddressesComponent,ProDetailsComponent,CatComponent,ProductComponent,MycartComponent,WishlstComponent,PersonalinfoComponent,AboutusComponent,PagenotfoundComponent];
