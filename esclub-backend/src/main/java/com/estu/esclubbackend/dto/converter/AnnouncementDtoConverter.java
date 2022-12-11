package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.model.Announcement;

public class AnnouncementDtoConverter {

    public static AnnouncementDto convertToAnnouncementDto(Announcement announcement) {
        if (announcement.getImages() != null){
            return AnnouncementDto.builder()
                    .id(announcement.getId())
                    .club(ClubDtoConverter.convertToClubCreateResponse(announcement.getClub()))
                    .title(announcement.getTitle())
                    .body(announcement.getBody())
                    .images(announcement.getImages().stream().map(ImageDtoConverter::convertToImageDto).toList()).build();
        }
        else {
            return AnnouncementDto.builder()
                    .id(announcement.getId())
                    .club(ClubDtoConverter.convertToClubCreateResponse(announcement.getClub()))
                    .title(announcement.getTitle())
                    .body(announcement.getBody()).build();
        }
    }
}
