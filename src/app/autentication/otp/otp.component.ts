import { Component, OnInit } from '@angular/core';
import { SandeepService } from '../../services/sandeep.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private sandeepser:SandeepService,
    private route:Router) { }

  ngOnInit() {
  }

  subpass(value)
  {
    this.sandeepser.spass(value).subscribe(
      data => {
        if(data=='Success')
        {
          alert("Password reset Success")
          this.route.navigate(['/login'])
        }
      },
      error =>console.error(error)
      
    )
  }
}
