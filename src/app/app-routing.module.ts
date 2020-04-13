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


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:LandingComponent},
  {
    path:'account',component:PersonalinfoComponent,
    // children:[
    //   {path:'address',component:AddressesComponent},
    //   {path:'orders',component:OrdersComponent},
    //   {path:'wishlist',component:WishlistComponent},
    // ]
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'address',component:AddressesComponent},
    {path:'orders',component:OrdersComponent},
    {path:'wishlist',component:MywishlistComponent},
    {path:'personalinfo',component:PersonalinfoComponent},
    {path:'about',component:AboutusComponent},
    {path:'addwish',component:WishlstComponent},
    {path:'product',component:ProductComponent},
    {path:'cart',component:MycartComponent},
    {path:'form',component:AddformComponent},
    {path:'proDetails',component:ProDetailsComponent},
    {path:'cat',component:CatComponent},
    {path:'ma',component:MainComponent},
    // {path:'form',component:AddformComponent},
    {path:'**',component:PagenotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const singlecomponent=[LandingComponent,AccountComponent,SignupComponent,LoginComponent,
  OrdersComponent,AddressesComponent,ProDetailsComponent,CatComponent,MainComponent,AddformComponent,ProductComponent,MycartComponent,WishlstComponent,MywishlistComponent,PersonalinfoComponent,AboutusComponent,PagenotfoundComponent];
