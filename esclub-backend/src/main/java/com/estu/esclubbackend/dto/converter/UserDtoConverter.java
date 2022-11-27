package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.model.User;

public class UserDtoConverter {
    public static UserDto convertToUserDto(User user){
        return UserDto.builder()
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .role(user.getRole()).build();
    }
}
