import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SandeepService } from '../sandeep.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  c=false
  otpc=0

  constructor(
              private route: Router,
              private sandeepser:SandeepService) { }

  ngOnInit() {
  }

  sendemail(email)
  {
    if (email==''){
      alert('Enter email to proceed')
      this.route.navigate(['/forgotpassword'])
    }
    else{
      this.sandeepser.emails(email).subscribe(
        data =>{
          if(data.msg == 'not exists')
          {
            alert('Your email is not registered. Please Sign up');
            this.route.navigate(['/signup'])
          }
          else if (data.msg == 'exists'){
            this.c = true
            this.otpc=data.otp
            //this.route.navigate(['/otp'])
          }
          // else{
          //   const otp = Math.floor(100000 + Math.random() * 900000)
          //   this.emailser.otps(otp).subscribe(
          //     resp=>{ 
          //       if (resp=="success")
          //       {
          //         alert("Password changed successfully")
          //         this.route.navigate(['/login'])
          //       }
          //     }
          //   )
          // }
        },
        error => console.error(error)
        
      )

    }
    

  }

  checkotp(otpdata)
  {
    if (otpdata==this.otpc)
    {
      this.route.navigate(['/otp'])
    }
    else
    {
      alert("You entered wrong OTP")
      this.route.navigate(['/forgotpassword'])
    }
    // this.otp_ser.spass(data).subscribe(
    //   data =>{
    //     if (data=="Wrong OTP")
    //     {
    //       alert("You entered wrong OTP")
    //       this.route.navigate(['/forgotpassword'])
    //     }
    //     else{
    //       this.route.navigate(['/otp'])
    //     }
    //   }
    // )
  }

}
