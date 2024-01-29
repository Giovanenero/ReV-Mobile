package com.example.Rev.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/createacont")
    public ResponseEntity<String> createAcont() {
        System.out.println("\n\nacessou endpoint");
        return ResponseEntity.ok("CHUPA Q DEU CERTO");
    }
}

