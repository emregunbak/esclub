package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.model.Event;
import com.estu.esclubbackend.repository.EventRepository;
import com.estu.esclubbackend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
@AllArgsConstructor
public class EventController {

    private final EventService eventService;
    private final EventRepository eventRepository;


    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents(){
        return ResponseEntity.ok(eventService.getAllEvent());
    }

    @PostMapping("/create")
    public ResponseEntity<EventDto> create(@RequestBody EventDto eventDto) {
        return ResponseEntity.ok(eventService.createEvent(eventDto));
    }

//    @PostMapping("/{id}")
//    public void update(@PathVariable("id") Long id, @RequestBody EventDto eventDto) {
//        Event event = eventRepository.findById(id).orElseThrow();
//        event.setEventName(eventDto.getEventName());
//        event.setDescription(eventDto.getDescription());
//        event.setUpdateDate(LocalDateTime.now());
//        eventRepository.save(event);
//        eventService.updateEvent(eventDto);
//    }

    @GetMapping("/fetch")
    public List<Event> fetch() {
        return eventRepository.findAllNotCompleted();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Long id) {
        eventRepository.deleteById(id);
    }
}
