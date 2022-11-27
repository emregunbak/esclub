package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.dto.converter.EventDtoConverter;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.objectmapping.EventDtoMapper;
import com.estu.esclubbackend.repository.ClubRepository;
import com.estu.esclubbackend.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;
    private final EventDtoMapper eventDtoMapper;
    private final ClubRepository clubRepository;

    public List<Event> getAllEvent() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public EventDto createEvent(EventDto eventDto) {
        var club = clubRepository.findById(eventDto.getClubId()).get();

        var event = eventRepository.save(Event.builder()
                .eventName(eventDto.getEventName())
                .club(club)
                .description(eventDto.getDescription())
                .build());
        return EventDtoConverter.convertToEventDto(event);
    }

//    public Event updateEvent(EventDto eventDto) {
//        return eventRepository.save(eventDtoMapper.map(eventDto));
//    }

//    public String deleteEvent(EventDto eventDto) {
//        eventRepository.deleteById(eventDto.getEventId());
//        return String.format("Delete Event", eventDtoMapper.map(eventDto));
//    }
}
