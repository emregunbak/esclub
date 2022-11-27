package com.estu.esclubbackend.objectmapping;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public abstract class EventDtoMapper {

    @Mapping(target = "club.id", source = "source.clubId")
    @Mapping(target = "id", source = "source.eventId")
    public abstract Event map(EventDto source);

}
