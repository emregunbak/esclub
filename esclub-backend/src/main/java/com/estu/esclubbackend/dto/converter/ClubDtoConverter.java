package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.ClubCreateResponse;
import com.estu.esclubbackend.dto.ClubDetailsDto;
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

    public static ClubDetailsDto converToClubDetailsDto(Club club){
        return ClubDetailsDto.builder()
                .id(club.getId())
                .clubName(club.getClubName())
                .shortName(club.getShortName())
                .logo(ImageDtoConverter.convertToImageDto(club.getLogo()))
                .announcements(club.getAnnouncements().stream().map(AnnouncementDtoConverter::convertToAnnouncementDto).toList())
                .events(club.getEvents())
                .members(club.getMembers())
                .team(club.getTeam())
                .sponsors(club.getSponsors())
                .clubInfo(club.getClubInfo()).build();
    }

    public static ClubCreateResponse convertToClubCreateResponse(Club club){
        return ClubCreateResponse.builder()
                .id(club.getId())
                .shortName(club.getShortName())
                .clubName(club.getClubName())
                .logo(ImageDtoConverter.convertToImageDto(club.getLogo())).build();
    }
}
