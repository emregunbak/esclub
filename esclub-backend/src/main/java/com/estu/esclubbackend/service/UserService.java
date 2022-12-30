package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.dto.converter.UserDtoConverter;
import com.estu.esclubbackend.dto.request.RegisterRequest;
import com.estu.esclubbackend.dto.request.UpdateUserRoleRequest;
import com.estu.esclubbackend.enums.Role;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.User;
import com.estu.esclubbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ClubService clubService;

    public UserDto createUser(RegisterRequest registerRequest){
        User user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .email(registerRequest.getEmail()).build();
        if (registerRequest.getRole().equalsIgnoreCase("USER")){
            user.setRole(Role.USER);
        }
        else if (registerRequest.getRole().equalsIgnoreCase("ADMIN")){
            user.setRole(Role.ADMIN);
        }
        else if (registerRequest.getRole().equalsIgnoreCase("CLUB_ADMIN")){
            user.setClub(clubService.getClubById(registerRequest.getClubId()));
            user.setRole(Role.CLUB_ADMIN);
        }
        else {
            throw new RuntimeException("Role not found!");
        }
        User savedUser = userRepository.save(user);

        return UserDtoConverter.convertToUserDto(savedUser);
    }

    public UserDto getUser(String username){
        var savedUser = findUserByUsername(username);
        return UserDtoConverter.convertToUserDto(savedUser);
    }

    public User findUserByUsername(String username){
        return userRepository.findByUsername(username)
                .orElseThrow(() -> GenericException.builder()
                        .httpStatus(HttpStatus.NOT_FOUND)
                        .errorMessage("User not found by given id!")
                        .build());
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public UserDto updateUserRole(UpdateUserRoleRequest request){
        User user = userRepository.findById(request.getUserId()).get();
        switch (request.getRole()) {
            case "USER" -> {
                user.setRole(Role.USER);
                user.setClub(null);
            }
            case "ADMIN" -> {
                user.setRole(Role.ADMIN);
                user.setClub(null);
            }
            case "CLUB_ADMIN" -> {
                user.setClub(clubService.getClubById(request.getClubId()));
                user.setRole(Role.CLUB_ADMIN);
            }
            default -> throw new RuntimeException("Role not found!");
        }
        return UserDtoConverter.convertToUserDto(userRepository.save(user));
    }
}

