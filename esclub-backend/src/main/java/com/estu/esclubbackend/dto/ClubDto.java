package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClubDto {
    private String clubName;

    //These fields will be updated
    @JsonIgnore
    private List<Event> events;
    @JsonIgnore
    private List<Announcement> announcements;
    @JsonIgnore
    private List<Sponsor> sponsors;
    @JsonIgnore
    private List<User> members;
    @JsonIgnore
    private List<User> team;
    @JsonIgnore
    private Image logo;
}
