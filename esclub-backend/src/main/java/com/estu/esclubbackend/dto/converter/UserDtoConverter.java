package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.model.User;

public class UserDtoConverter {
    public static UserDto convertToUserDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole()).build();
    }
}
