import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,singlecomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WishlstComponent } from './wishlst/wishlst.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';
import { AddformComponent } from './addform/addform.component';
import { CatComponent } from './cat/cat.component';
import { DupComponent } from './dup/dup.component';
import { MainComponent } from './main/main.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import{InfiniteScrollModule} from 'ngx-infinite-scroll';
import{NgxSpinnerModule} from 'ngx-spinner';
import{HttpClientModule} from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { OtpComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { AgmCoreModule } from '@agm/core';
import { UserGuard } from './user.guard';
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
        //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("768954435009-2b5ovtp6buo28p6gnldjs7o2h1sj2fuu.apps.googleusercontent.com")
        },
         
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    singlecomponent,
    WishlstComponent,
    MycartComponent,
    ProductComponent,
    AddformComponent,
    CatComponent,
    DupComponent,
    MainComponent,
    ProDetailsComponent,
    OtpComponent,
    ForgotpasswordComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWy16vPjLi0HpzDceyZ35MD8hefjHGsYQ'
    }),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
