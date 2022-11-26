package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.repository.AnnouncementRepository;
import com.estu.esclubbackend.repository.ClubRepository;
import com.estu.esclubbackend.repository.EventRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/event")
@AllArgsConstructor
public class EventController {

    private final EventRepository EventRepository;
    private final ClubRepository ClubRepository;
}
