package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Event;
import lombok.Data;

@Data
public class EventDto {

    private Event event;
    private String eventName;
    private String description;
    private Integer eventId;
    private Integer clubId;

}
