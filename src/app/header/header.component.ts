import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { LoginservService } from '../services/loginserv.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router, public lgn:LoginservService) {}

  v1 = true;
  ngOnInit(): void {}

login = this.lgn.login
valu =this.lgn.user
logout(){
  this.lgn.login = false
   this.router.navigate(['']);
}
}
