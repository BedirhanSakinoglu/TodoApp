import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public basicAuthenticationService: BasicAuthenticationService) {}

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

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data),
        this.invalidLogin = false,
        this.router.navigate(['welcome/' + this.username]);
      },
      error => {
        console.log(error),
        this.invalidLogin = true
      }
    )
  }

  /*
  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data),
        this.invalidLogin = false,
        this.router.navigate(['welcome/' + this.username]);
      },
      error => {
        console.log(error),
        this.invalidLogin = true
      }
    )
  }
  */
}
