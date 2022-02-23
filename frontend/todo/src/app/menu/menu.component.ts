import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isLogged : boolean = false;
  //username:string = sessionStorage.getItem('authenticatedUser') as string;

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
    //this.isLogged = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  goHome(){
    this.router.navigate(["welcome/",sessionStorage.getItem('authenticatedUser') as string]);
  }
}
