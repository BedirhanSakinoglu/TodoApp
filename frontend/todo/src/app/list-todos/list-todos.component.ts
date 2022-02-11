import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public isDone: boolean,
    public dueDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //Hardcoded Todos
  /*
  todos = [
    new Todo(1, 'Learn Kafka', false, new Date()),
    new Todo(2, 'Learn Spring Boot', false, new Date()),
    new Todo(3, 'Learn Angular', false, new Date()),
    new Todo(4, 'Complete Essay Project', false, new Date())
  
    
    
    //{id: 1, description: 'Learn Kafka'},
    //{id: 2, description: 'Learn Spring Boot'},
    //{id: 3, description: 'Learn Angular'},
    //{id: 4, description: 'Complete Essay Project'},
    
  ]
  */

  todos: Todo[] = [];
  deletionMessage: string = "";

  constructor(
    private todoService: TodoDataService
  ) { }

    listTodos(){
      this.todoService.retrieveAllTodos(sessionStorage.getItem('authenticatedUser') as string).subscribe(
        response => {
          this.todos = response;
        }
      )
    }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(sessionStorage.getItem('authenticatedUser') as string, id).subscribe(
      response => {
        this.deletionMessage = "Deletion of Todo " + id + " is Succesful";
        this.listTodos();
      }
    );
  }

  ngOnInit(): void {
    this.listTodos();
  }

}
