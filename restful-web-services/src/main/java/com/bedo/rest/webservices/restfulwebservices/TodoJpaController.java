package com.bedo.rest.webservices.restfulwebservices;

import com.bedo.rest.webservices.restfulwebservices.model.Todo;
import com.bedo.rest.webservices.restfulwebservices.repo.TodoJpaRepository;
import com.bedo.rest.webservices.restfulwebservices.service.HardcodedTodoService;
import com.bedo.rest.webservices.restfulwebservices.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping
public class TodoJpaController {

    private TodoService todoService;

    public TodoJpaController(@Autowired TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAllTodos(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findTodoById(id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.updateTodo(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Todo> addTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo newTodo = todoService.addTodo(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.CREATED);
    }
}
