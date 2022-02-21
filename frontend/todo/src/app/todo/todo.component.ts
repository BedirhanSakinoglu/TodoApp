import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!:number;
  todo!:Todo;
  
  pipe = new DatePipe('en-US');
  myFormattedDate:string|null = "A";
  stringDate:string|null = "B";
  invalidDate: boolean = false;
  
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //Invalid date
    const now = Date.now();
    //console.log("NOW: ", now);
    this.myFormattedDate = this.pipe.transform(now, "yyyy-MM-dd");
    console.log("MY FORMATTED DATE: ", this.myFormattedDate);
    //------------
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,sessionStorage.getItem('authenticatedUser') as string,'',false,new Date()); //Bunu yapmayınca hata veriyor
    
    if(this.id != -1){
      this.todoService.retrieveTodo(sessionStorage.getItem('authenticatedUser') as string, this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo(){
    this.stringDate = this.pipe.transform(this.todo.dueDate, "yyyy-MM-dd");
    console.log("DUE DATE: ", this.todo.dueDate);
    //Check Date
    if(this.stringDate! < this.myFormattedDate!){
      this.invalidDate = true;
    }
    //Save
    else{
      this.invalidDate = false;
      if(this.id == -1){
        this.todoService.createTodo(sessionStorage.getItem('authenticatedUser') as string, this.todo).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
      }
      else{
        this.todoService.updateTodo(sessionStorage.getItem('authenticatedUser') as string, this.id, this.todo).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
      }
    }
  }

  cancel(){
    this.router.navigate(['todos'])
  }
}
