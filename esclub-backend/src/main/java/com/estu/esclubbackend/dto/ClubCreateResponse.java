package com.estu.esclubbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClubCreateResponse {
    private Long id;
    private String clubName;
    private String shortName;
    private ImageDto logo;
}
