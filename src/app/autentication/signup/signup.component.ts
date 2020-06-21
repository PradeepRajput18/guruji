import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../../vadilations/customvalidation.service';
import { SandeepService } from '../../services/sandeep.service';
import { Router } from '@angular/router';
import { ServersideService } from '../../services/serverside.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  goods=['vegetables ','fruits ','pulses','oils'] 
  imagesection: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private sandeepser:SandeepService,
    private router:Router,
    private serverside:ServersideService
  ) { }

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

    this.imagesection=this.fb.group({
      producttype:['',Validators.required],
      productname:['',Validators.required],
      productcost:['',Validators.required],
      productoriginal:['',Validators.required],
      imageform:['',Validators.required],
    });
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


  // sign up by sandeep

  subdat(frmdata)
  {
    this.sandeepser.userdata(frmdata).subscribe(
      resdata=>{
        if(resdata=="User already exists")
        {
          this.router.navigate(['/login'])
          alert('User already exists. Please Login')
        }
        console.log(resdata)
        localStorage.setItem('token',resdata.token) 

        this.router.navigate(['/cart'])
      },
      error=>console.error(error)
    )
    //using cors for cross origin resource sharing
  }




  public images;
  onchange(event){
    if(event.target.files.length>0){
      this.images=event.target.files[0]
    }
  }


  onclick(imagedetails){
    const formdata=new FormData()
    console.log(imagedetails);
    let offer="10%",
    button="wishlist",
    carbutton="Add to cart",
    carheart="fa fa-heart-o",
    quant="1kg"
    formdata.append('photo',this.images)
    formdata.append('rating',imagedetails.producttype)
    formdata.append('name',imagedetails.productname)
    formdata.append('cost',imagedetails.productcost)
    formdata.append('original',imagedetails.productoriginal)
    formdata.append('offer',offer)
    formdata.append('button',button)
    formdata.append('carbutton',carbutton)
    formdata.append('carheart',carheart)
    formdata.append('quant',quant)
    let total={
      formdata,
      imagedetails
    }
    this.serverside.uploadimgaes(formdata).subscribe(
      data=>console.log(data),
      error=>console.error(error)
    )
  }
}


