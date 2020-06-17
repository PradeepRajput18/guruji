import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { SandeepService } from '../sandeep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private socialAuthService: AuthService,
    private router:Router,
    private sandeepser:SandeepService
  ){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      phoneno:['', Validators.compose([Validators.required, this.customValidator.phoneValidator()])],
      select:['']
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );

    
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

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
        this.router.navigate(['/personalinfo'])
            
      }
    );
  }

  // userlogin by sandeep

  userlgn(data)
  {
    this.sandeepser.sublgn(data).subscribe(
      resdata=>{
        if(resdata=="No user found. Please register")
        {
          this.router.navigate(['/signup'])
          alert("No user found. Please register")
        }
        else if(resdata=="Incorrect Password")
        {
          alert("Incorrect password")
        }
        else{
        console.log(resdata)
        localStorage.setItem('token',resdata.token) 
        this.router.navigate(['/cart'])
        }

        
      },
      error=>console.error(error)
    )
  }
}