package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.dto.request.EventRequest;
import com.estu.esclubbackend.projections.EventProjection;
import com.estu.esclubbackend.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @GetMapping("/getAll")
    public ResponseEntity<List<EventProjection>> getAllEvents() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(eventService.getAllEvent());
    }

    @GetMapping("/getById")
    public ResponseEntity<EventDto> getEventById(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(eventService.getEventById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<EventDto> create(@Valid @RequestBody EventRequest request) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(eventService.createEvent(request));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(eventService.deleteEvent(id));
    }

    @PostMapping("/update")
    public ResponseEntity<EventDto> update(@Valid @RequestBody EventRequest request) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(eventService.updateEvent(request));
    }

}


