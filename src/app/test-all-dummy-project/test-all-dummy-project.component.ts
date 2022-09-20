import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-test-all-dummy-project',
  templateUrl: './test-all-dummy-project.component.html',
  styleUrls: ['./test-all-dummy-project.component.css'],
})
export class TestALlDummyProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lf = new FormGroup({
    name1: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
    ]),

    pw: new FormControl('', Validators.pattern('^[a-z][A-Z]@[1-9]$')),
  });

  val1 = [
    {
      id: 'name',
      class: 'c1',
      type: 'text',
      label: 'name',
      fcn: 'name1',
    },
    {
      id: 'name1',
      class: 'c2',
      type: 'text',
      label: 'password',
      fcn: 'pw',
    },
    {
      id: 'n2',
      class: 'c3',
      type: 'submit',
      label: 'Login',
      fcn: '',
    },
  ];

  signup() {

    localStorage.setItem(
      JSON.stringify(this.lf.value.name1),
      JSON.stringify(this.lf.value.pw)
    );
  }

  login() {
    var v1 = localStorage.getItem(JSON.stringify(this.lf.value.name1));
    console.log(localStorage);
    if (v1 == JSON.stringify(this.lf.value.pw)) {
      console.log('valid');

    } else {
      console.log('INVALID');

    }
  }
}

