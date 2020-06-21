import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SandeepService {

  constructor(private http: HttpClient,
    private router: Router) { }
  

  // for otp here from otp component


  spass(data)
  {
    console.log('In otp service');
    return this.http.post<any>('/fgtpassw/dbupdate', {epass:data})
  }

  // for sign up from signup component


  userdata(value)
  {
    console.log('sending form data to backend from service');
    return this.http.post<any>('/signupfrm',value)
  }

  // login logout which includes tokens

  sublgn(data)
  {
    console.log('posting data from login service');
    return this.http.post<any>('/ulgn',data)
  }

  LoggedIn()
  {
    return !!localStorage.getItem('token')
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])

  }

  // forget password this is

  emails(mail)
  {
    console.log('in service fgtpass',mail);
    return this.http.post<any>('/fgtpassw', {mail:mail} )
  }
}
