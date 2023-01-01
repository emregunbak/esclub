package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;

public class EventDtoConverter {

    public static EventDto convertToEventDto(Event event){
        return EventDto.builder()
                .clubId(event.getClub().getId())
                .eventId(event.getId())
                .eventName(event.getEventName())
                .images(event.getImages().stream().map(ImageDtoConverter::convertToImageDto).toList())
                .description(event.getDescription()).build();
    }
}
