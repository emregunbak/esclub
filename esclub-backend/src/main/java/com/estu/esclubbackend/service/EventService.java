package com.estu.esclubbackend.service;

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
    public Event createEvent(Event event){
        return EventRepository.save(event);
    }

    public Event updateEvent(Event event){
        return EventRepository.save(event);
    }

    public String deleteEvent(Event event){
        EventRepository.deleteById(event.getId());
        return String.format("Delete Event", event.getId());
    }
}
