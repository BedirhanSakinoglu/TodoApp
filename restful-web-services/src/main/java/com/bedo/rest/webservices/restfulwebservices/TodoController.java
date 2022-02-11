package com.bedo.rest.webservices.restfulwebservices;

import com.bedo.rest.webservices.restfulwebservices.model.Todo;
import com.bedo.rest.webservices.restfulwebservices.service.HardcodedTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoController {

    private HardcodedTodoService todoService;

    public TodoController(@Autowired HardcodedTodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        //return todoService.findAll();
        return todoService.findUsersAll(username);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
