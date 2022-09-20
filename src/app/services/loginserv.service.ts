import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})

export class LoginservService {
  login = false
  user = ''


  constructor() { }
}
