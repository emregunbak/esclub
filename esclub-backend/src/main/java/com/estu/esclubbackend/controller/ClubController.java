package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.dto.ClubCreateResponse;
import com.estu.esclubbackend.dto.converter.ImageDtoConverter;
import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.service.ClubService;
import com.estu.esclubbackend.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/clubs")
@AllArgsConstructor
public class ClubController {
    private final ClubService clubService;
    private final ImageService imageService;

    @GetMapping
    public ResponseEntity<List<ClubDto>> getAllClubs(){
        return ResponseEntity.ok(clubService.getAllClubs());
    }

//    @GetMapping("/details")
//    public ResponseEntity<?> getAllClubDetails(){
//        return ResponseEntity.ok(clubService.getAllClubDetails());
//    }

    @PostMapping("/create")
    public ResponseEntity<ClubCreateResponse> createClub(
            @RequestParam String clubName,
            @RequestParam String shortName,
            @RequestParam MultipartFile logo) throws Exception {
        var clubLogo = imageService.uploadImage(logo, shortName);
        ClubDto club = ClubDto.builder().clubName(clubName).shortName(shortName).logo(clubLogo).build();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(clubService.createClub(club));
    }

    @PostMapping("/upload-file")
    public ResponseEntity<Image> uploadImage(@RequestParam("file")MultipartFile file) throws IOException {
        return ResponseEntity.status(HttpStatus.OK)
                .body(imageService.uploadImage(file));
    }

    @GetMapping("/download-file")
    public ResponseEntity<?> downloadImage(@RequestParam Long imageId){
        var imageData = imageService.downloadImage(imageId);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.IMAGE_PNG)
                .body(imageData);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClub(@PathVariable Long id){
        return ResponseEntity.ok(clubService.deleteClub(id));
    }
}
