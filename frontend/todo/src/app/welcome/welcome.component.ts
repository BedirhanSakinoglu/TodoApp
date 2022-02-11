import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

  manageTodos(){
    this.router.navigate(["todos"]);
  }

  getWelcomeMessage(){
    
  }

}
