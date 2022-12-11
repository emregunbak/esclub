package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.model.Sponsor;

public class SponsorDtoConverter {
    public static SponsorDto convertToSponsorDto(Sponsor sponsor) {

        return SponsorDto.builder()
                .sponsorName(sponsor.getSponsorName())
                .logo(sponsor.getLogo())
                .club(sponsor.getClub())
                .description(sponsor.getDescription())
                .build();
    }
}
