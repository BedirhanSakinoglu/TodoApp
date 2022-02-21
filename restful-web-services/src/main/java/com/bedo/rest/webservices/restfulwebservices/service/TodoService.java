package com.bedo.rest.webservices.restfulwebservices.service;

import com.bedo.rest.webservices.restfulwebservices.model.Todo;
import com.bedo.rest.webservices.restfulwebservices.repo.TodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private TodoJpaRepository todoJpaRepository;

    public TodoService(@Autowired TodoJpaRepository todoJpaRepository){
        this.todoJpaRepository = todoJpaRepository;
    }

    public List<Todo> findAllTodos(String username){
        return todoJpaRepository.findByUsername(username);
    }

    public Todo findTodoById(Long id){
        return todoJpaRepository.findById(id).get();
    }

    public Todo updateTodo(Todo todo){
        return todoJpaRepository.save(todo);
    }

    public Todo addTodo(Todo todo){
        return todoJpaRepository.save(todo);
    }

    public void deleteTodo(Long id){
        todoJpaRepository.deleteById(id);
    }

}
