package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.UserDto;
import com.estu.esclubbackend.enums.Role;
import com.estu.esclubbackend.model.User;

public class UserDtoConverter {
    public static UserDto convertToUserDto(User user){
        if (user.getRole() == Role.CLUB_ADMIN){
            return UserDto.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .role(user.getRole())
                    .clubId(user.getClub().getId()).build();
        }
        else{
            return UserDto.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .role(user.getRole()).build();
        }
    }
}
