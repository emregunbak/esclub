package com.estu.esclubbackend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubAdminCreateRequest {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    private String email;
}
