package com.estu.esclubbackend.dto;

import lombok.Data;

@Data
public class EventDto {

    private String eventName;
    private String description;
    private Long eventId;
    private Long clubId;

}
