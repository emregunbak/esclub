package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.dto.request.UpdateUserRoleRequest;
import com.estu.esclubbackend.model.User;
import com.estu.esclubbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping("/update-role")
    public ResponseEntity<UserDto> updateUserRole(@RequestBody UpdateUserRoleRequest request){
        return ResponseEntity.ok(userService.updateUserRole(request));
    }
}
