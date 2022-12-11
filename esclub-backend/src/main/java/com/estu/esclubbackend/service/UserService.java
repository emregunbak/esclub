package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.dto.converter.UserDtoConverter;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.User;
import com.estu.esclubbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDto createUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        var savedUser = userRepository.save(user);
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
}

