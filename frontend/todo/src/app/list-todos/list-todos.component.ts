import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Kafka', false, new Date()),
    new Todo(2, 'Learn Spring Boot', false, new Date()),
    new Todo(3, 'Learn Angular', false, new Date()),
    new Todo(4, 'Complete Essay Project', false, new Date())
    
    /*
    {id: 1, description: 'Learn Kafka'},
    {id: 2, description: 'Learn Spring Boot'},
    {id: 3, description: 'Learn Angular'},
    {id: 4, description: 'Complete Essay Project'},
    */
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
