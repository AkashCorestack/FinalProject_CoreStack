import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginservService } from '../services/loginserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  sf = new FormGroup({
    name1: new FormControl(''),
    mail1: new FormControl(''),
    pw: new FormControl(''),
    pw1: new FormControl(''),
  });
  dta = [
    {
      label: 'email_address',
      lbldta: 'E-Mail Id :',
      type: 'text',
      id: 'email_address',
      class1: 'form-control mail1',
      name: 'email-address',
      fcn: 'mail1',
    },

    {
      label: 'name',
      lbldta: 'Name :',
      type: 'text',
      id: 'name',
      class1: 'form-control name',
      name: 'password',
      fcn: 'name1',
    },

    {
      label: 'password',
      lbldta: 'password :',
      type: 'password',
      id: 'password',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw',
    },

    {
      label: 'password',
      lbldta: 'Reenter password :',
      type: 'password',
      id: 'password2',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw1',
    },
  ];
  constructor(public router: Router, public serv: LoginservService) {}

  ngOnInit(): void {}

  signup() {
    // console.log(this.sf.value);
    localStorage.setItem(
      JSON.stringify(this.sf.value.mail1),
      JSON.stringify(this.sf.value.pw)
    );
    this.serv.login = true;
    this.serv.user = JSON.stringify(this.sf.value.mail1).slice(1,6)+"....";
    this.router.navigate(['home']);
  }

}
