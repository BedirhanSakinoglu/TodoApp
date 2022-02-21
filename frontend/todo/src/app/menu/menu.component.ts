import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isLogged : boolean = false;
  username:string='';

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.isLogged = this.hardcodedAuthenticationService.isUserLoggedIn();
    this.username = sessionStorage.getItem('authenticatedUser') as string;
  }

}
