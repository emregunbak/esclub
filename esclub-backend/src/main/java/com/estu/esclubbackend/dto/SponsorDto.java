package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SponsorDto {

    private Long sponsorId;
    private String sponsorName;
    private String description;
    private List<Club> club;
    private Image logo;
}
