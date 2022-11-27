package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.repository.EventRepository;
import com.estu.esclubbackend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@AllArgsConstructor
public class EventController {

    private final EventService eventService;
    private final EventRepository eventRepository;

    @PostMapping
    public void create(@RequestBody EventDto eventDto) {
        eventService.createEvent(eventDto);
    }

    @PostMapping("/{id}")
    public void update(@PathVariable("id") Long id, @RequestBody EventDto eventDto) {
        Event event = eventRepository.findById(id).orElseThrow();
        event.setEventName(eventDto.getEventName());
        event.setDescription(eventDto.getDescription());
        event.setUpdateDate(LocalDateTime.now());
        eventRepository.save(event);
        eventService.updateEvent(eventDto);
    }

    @GetMapping
    public List<Event> fetch() {
        return eventRepository.findAllNotCompleted();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        eventRepository.deleteById(id);
    }
}
