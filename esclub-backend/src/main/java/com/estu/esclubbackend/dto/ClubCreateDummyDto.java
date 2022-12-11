package com.estu.esclubbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This dto will be refactored
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClubCreateDummyDto {
    private Long id;
    private String clubName;
    private String shortName;
    private ImageDto logo;
//    private TokenResponseDto admin;
}
