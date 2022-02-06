import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid username or password'
  invalidLogin = false;

  constructor(private router: Router, 
    public hardcodedAuthenticationService: HardcodedAuthenticationService) {}

  ngOnInit(): void {
  }

  handleLogin(){
    /*
    if(this.username==='bedo' && this.password==='123'){
      console.log(this.username + " " + this.password);
      this.invalidLogin = false;
      //Redirect
      this.router.navigate(['welcome/' + this.username]);
    }
    */
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome/' + this.username]);
    } 
    else{
      this.invalidLogin = true;
    }
    
  }

}
