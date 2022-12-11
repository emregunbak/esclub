package com.estu.esclubbackend.config;

import com.estu.esclubbackend.enums.Role;
import com.estu.esclubbackend.model.User;
import com.estu.esclubbackend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartupConfig implements CommandLineRunner {

    private final UserService userService;

    public StartupConfig(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {
//        userService.createUser(User.builder()
//                .role(Role.ADMIN)
//                .username("admin")
//                .password("password")
//                .email("admin@hotmail.com").build());
//
//        userService.createUser(User.builder()
//                .role(Role.USER)
//                .username("user")
//                .password("password")
//                .email("user@hotmail.com").build());
//        userService.createUser(User.builder()
//                .role(Role.CLUB_ADMIN)
//                .username("club_admin")
//                .password("password")
//                .email("club.admin@hotmail.com").build());
    }
}
