package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.model.Sponsor;

import java.util.List;

public class SponsorDtoConverter {
    public static SponsorDto convertToSponsorDto(Sponsor sponsor) {

        return SponsorDto.builder()
                .sponsorId(sponsor.getId())
                .sponsorName(sponsor.getSponsorName())
                .logo(ImageDtoConverter.convertToImageDto(sponsor.getLogo()))
                .clubName(sponsor.getClub().getClubName())
                .description(sponsor.getDescription())
                .build();
    }
}
