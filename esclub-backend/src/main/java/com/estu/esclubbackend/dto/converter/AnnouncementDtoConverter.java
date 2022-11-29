package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.model.Announcement;

public class AnnouncementDtoConverter {

    public static AnnouncementDto convertToAnnouncementDto(Announcement announcement) {
        return AnnouncementDto.builder()
                .id(announcement.getId())
                .clubId(announcement.getClub().getId())
                .title(announcement.getTitle())
                .body(announcement.getBody())
                .image(announcement.getImages())
                .imageURL(announcement.getImageURL()).build();
    }
}
