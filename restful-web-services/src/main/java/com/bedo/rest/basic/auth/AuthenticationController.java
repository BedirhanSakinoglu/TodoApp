package com.bedo.rest.basic.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AuthenticationController {

     @GetMapping("/basicauth")
     public AuthenticationBean authenticationBean(){
         //return todoService.findAll();
         return new AuthenticationBean("You are authenticated");
     }
}
