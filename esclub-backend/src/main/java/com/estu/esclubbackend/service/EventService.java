package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.objectmapping.EventDtoMapper;
import com.estu.esclubbackend.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository EventRepository;
    private final EventDtoMapper eventDtoMapper;

    public List<Event> getAllEvent() {
        return EventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return EventRepository.findById(id);
    }

    public Event createEvent(EventDto eventDto) {
        return EventRepository.save(eventDtoMapper.map(eventDto));
    }

    public Event updateEvent(EventDto eventDto) {
        return EventRepository.save(eventDtoMapper.map(eventDto));
    }

    public String deleteEvent(EventDto eventDto) {
        EventRepository.deleteById(eventDto.getEventId());
        return String.format("Delete Event", eventDtoMapper.map(eventDto));
    }
}
