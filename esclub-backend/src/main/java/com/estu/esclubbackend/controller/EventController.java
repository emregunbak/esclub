package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.repository.AnnouncementRepository;
import com.estu.esclubbackend.repository.ClubRepository;
import com.estu.esclubbackend.repository.EventRepository;
import com.estu.esclubbackend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/event")
@AllArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping
    public void create(@RequestBody EventDto eventDto){
        eventService.createEvent(eventDto);
    }


}
