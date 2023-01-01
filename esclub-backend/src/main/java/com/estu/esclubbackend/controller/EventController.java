package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.EventDto;
import com.estu.esclubbackend.dto.request.EventRequest;
import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.service.EventService;
import com.estu.esclubbackend.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
@AllArgsConstructor
public class EventController {

    private final EventService eventService;
    private final ImageService imageService;

    @GetMapping("/getAll")
    public ResponseEntity<List<EventDto>> getAllEvents() {
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

    @PostMapping(value = "/create", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<EventDto> create(
            @Valid @ModelAttribute EventRequest request,
            @RequestParam List<MultipartFile> images) throws IOException
    {

        var imageList = images.stream().map((l) -> {
            Image img;
            try {
                img = imageService.uploadImage(l);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            return img;
        }).toList();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(eventService.createEvent(request, imageList));
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


