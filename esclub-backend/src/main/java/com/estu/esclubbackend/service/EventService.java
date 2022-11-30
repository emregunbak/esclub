package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.dto.converter.EventDtoConverter;
import com.estu.esclubbackend.dto.request.EventRequest;
import com.estu.esclubbackend.enums.ErrorCode;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.projections.EventProjection;
import com.estu.esclubbackend.repository.ClubRepository;
import com.estu.esclubbackend.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;
    private final ClubRepository clubRepository;

    public List<EventProjection> getAllEvent() {
        return eventRepository.findAllBy(EventProjection.class);
    }

    public EventDto getEventById(Long id) {
        return EventDtoConverter.convertToEventDto(eventRepository.findById(id).orElseThrow(() ->
                GenericException.builder().errorCode(ErrorCode.ANNOUNCEMENT_NOT_FOUND).build()));
    }

    public EventDto createEvent(EventRequest request) {
        var club = clubRepository.findById(request.getClubId()).orElseThrow();

        var event = eventRepository.save(Event.builder()
                .eventName(request.getEventName())
                .club(club)
                .description(request.getDescription())
                .build());
        return EventDtoConverter.convertToEventDto(event);
    }

    public String deleteEvent(Long id) {
        eventRepository.deleteById(id);
        return "Delete Event : " + id;
    }

    public EventDto updateEvent(EventRequest request) {
        Event event = eventRepository.findById(request.getEventId()).orElseThrow();
        event.setEventName(request.getEventName());
        event.setDescription(request.getDescription());
        event.setUpdateDate(LocalDateTime.now());
        return EventDtoConverter.convertToEventDto(event);
    }
}
