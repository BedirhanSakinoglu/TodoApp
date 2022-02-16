package com.bedo.rest.webservices.restfulwebservices.service;

import com.bedo.rest.webservices.restfulwebservices.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class HardcodedTodoService {
    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    static{
        todos.add(new Todo(++idCounter, "bedo", "Apply for internship", new Date(), false));
        todos.add(new Todo(++idCounter, "bedo", "Complete the full-stack application", new Date(), false));
        todos.add(new Todo(++idCounter, "bedo", "Finish the udemy course", new Date(), false));
        todos.add(new Todo(++idCounter, "bedo", "Study OS course", new Date(), false));
        todos.add(new Todo(++idCounter, "gurem", "ITU'ye başvur", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public List<Todo> findUsersAll(String username){
        List<Todo> userTodos = new ArrayList();
        for(Todo todo:todos){
            if(todo.getUsername().equals(username)) {
                userTodos.add(todo);
            }
        }
        return userTodos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo==null){
            return null;
        }
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for(Todo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
            System.out.println("Username: " + todo.getUsername());
        }
        else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }


}
