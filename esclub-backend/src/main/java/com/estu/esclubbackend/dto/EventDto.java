package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Event;
import lombok.Data;

@Data
public class EventDto {

    private Event event;
    private Integer eventId;
    private Integer clubId;

}
