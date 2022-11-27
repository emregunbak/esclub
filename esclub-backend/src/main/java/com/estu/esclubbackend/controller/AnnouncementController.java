package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.dto.request.AnnouncementRequest;
import com.estu.esclubbackend.service.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/announcements")
@AllArgsConstructor
public class AnnouncementController {
    private final AnnouncementService announcementService;

    @GetMapping("/")
    public ResponseEntity<List<AnnouncementDto>> getAllAnnouncements() {
        return ResponseEntity.ok(announcementService.getAllAnnouncements());
    }

    @PostMapping("/create-announcement")
    public ResponseEntity<AnnouncementDto> createAnnouncement(@Valid @RequestBody AnnouncementRequest request) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(announcementService.createAnnouncement(request));
    }
}
