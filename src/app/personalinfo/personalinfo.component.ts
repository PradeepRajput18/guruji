import { Component, OnInit } from '@angular/core';
import { SandeepService } from '../sandeep.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  constructor(private sandeep:SandeepService) { }
  ngOnInit() {
  }


  

}
