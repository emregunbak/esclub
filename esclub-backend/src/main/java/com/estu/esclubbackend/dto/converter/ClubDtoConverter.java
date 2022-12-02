package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.model.Club;

public class ClubDtoConverter {

    public static ClubDto convertToClubDto(Club club){
        return ClubDto.builder()
                .id(club.getId())
                .clubName(club.getClubName())
                .shortName(club.getShortName())
                .events(club.getEvents())
                .announcements(club.getAnnouncements())
                .sponsors(club.getSponsors())
                .members(club.getMembers())
                .team(club.getTeam())
                .logo(club.getLogo()).build();
    }
}
