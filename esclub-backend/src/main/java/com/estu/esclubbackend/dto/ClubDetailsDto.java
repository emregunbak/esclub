package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClubDetailsDto {

    private Long id;
    private String clubName;
    private String shortName;
    private ImageDto logo;
    private ClubInfo clubInfo;
//    private UserDto admin;

    private List<Event> events;
    private List<AnnouncementDto> announcements;
    private List<Sponsor> sponsors;
    private List<User> members;
    private List<User> team;
}
