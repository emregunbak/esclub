package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.TokenResponseDto;
import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.dto.request.LoginRequest;
import com.estu.esclubbackend.dto.request.RegisterRequest;
import com.estu.esclubbackend.service.AuthService;
import com.estu.esclubbackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    public AuthController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDto> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody RegisterRequest registerRequest){
        return ResponseEntity.ok(userService.createUser(registerRequest));
    }

    @GetMapping("/admin")
    public ResponseEntity<String> admin(){
        return ResponseEntity.ok("admin");
    }

}