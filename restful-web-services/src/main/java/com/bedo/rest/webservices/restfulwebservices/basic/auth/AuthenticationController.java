package com.bedo.rest.webservices.restfulwebservices.basic.auth;

import com.bedo.rest.webservices.restfulwebservices.model.Todo;
import com.bedo.rest.webservices.restfulwebservices.service.HardcodedTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AuthenticationController {

     @GetMapping("/basicauth")
     public AuthenticationBean authenticationBean(){
         //return todoService.findAll();
         return new AuthenticationBean("You are authenticated");
     }
}
