package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.dto.request.SponsorRequest;
import com.estu.esclubbackend.projections.SponsorProjection;
import com.estu.esclubbackend.repository.SponsorRepository;
import com.estu.esclubbackend.service.ImageService;
import com.estu.esclubbackend.service.SponsorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/sponsors")
@AllArgsConstructor
public class SponsorController {

    private final SponsorService sponsorService;
    private final ImageService imageService;

    @GetMapping("/getAll")
    public ResponseEntity<List<SponsorProjection>> getAllSponsors() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.getAllSponsor());
    }

    @GetMapping( "/getById")
    public ResponseEntity<SponsorDto> getSponsorById(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.getSponsorById(id));
    }

    @PostMapping(value = "/create", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<SponsorDto> create(
            @Valid @ModelAttribute SponsorRequest request,
            @RequestParam MultipartFile logo) throws IOException {
        var sponsorLogo = imageService.uploadImage(logo);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(sponsorService.createSponsor(request, sponsorLogo));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.deleteSponsor(id));
    }
/*
    @PostMapping("/update")
    public ResponseEntity<SponsorDto> update(@Valid @RequestBody SponsorRequest request, MultipartFile logo) throws IOException {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.updateSponsor(request, logo));

    }

 */

}
