package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.dto.request.AnnouncementRequest;
import com.estu.esclubbackend.service.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/announcements")
@AllArgsConstructor
public class AnnouncementController {
    private final AnnouncementService announcementService;

    @GetMapping
    public ResponseEntity<List<AnnouncementDto>> getAllAnnouncements(){
        return ResponseEntity.ok(announcementService.getAllAnnouncements());
    }

    @GetMapping("/club")
    public ResponseEntity<AnnouncementDto> getAnnouncementByClubId(@RequestParam Long clubId){
        return ResponseEntity.ok(announcementService.getAnnouncementByClubId(clubId));
    }

    @GetMapping("/{announcementId}")
    public ResponseEntity<?> getAnnouncementById(@PathVariable Long announcementId){
        return ResponseEntity.status(HttpStatus.OK)
                .body(announcementService.getAnnouncementById(announcementId));
    }
//@Valid @ModelAttribute AnnouncementRequest request  consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }
    @PostMapping(path = "/create")
    public ResponseEntity<AnnouncementDto> createAnnouncement(@RequestBody AnnouncementRequest request){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(announcementService.createAnnouncement(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAnnouncement(@PathVariable Long id){
        return ResponseEntity.ok(announcementService.deleteAnnouncement(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AnnouncementDto> updateAnnouncement(
            @PathVariable Long id,
            @Valid @ModelAttribute AnnouncementRequest request){
        return ResponseEntity.ok(announcementService.updateAnnouncement(id, request));
    }
}
