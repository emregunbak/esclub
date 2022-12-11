package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;

public class EventDtoConverter {

    public static EventDto convertToEventDto(Event event){
        return EventDto.builder()
                .clubId(event.getClub().getId())
                .eventId(event.getId())
                .clubName(event.getClub().getClubName())
                .eventName(event.getEventName())
                .description(event.getDescription()).build();
    }
}
