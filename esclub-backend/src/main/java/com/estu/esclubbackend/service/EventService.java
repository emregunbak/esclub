package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EventService {

    private final EventRepository EventRepository;

    public List<Event> getAllEvent(){
        return EventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id){
        return EventRepository.findById(id);
    }
    public Event createEvent(EventDto eventDto){
        return EventRepository.save(eventDto.getEvent());
    }

    public Event updateEvent(EventDto eventDto){
        return EventRepository.save(eventDto.getEvent());
    }

    public String deleteEvent(EventDto eventDto){
        EventRepository.deleteById(eventDto.getEvent().getId());
        return String.format("Delete Event", eventDto.getEvent().getId());
    }
}
