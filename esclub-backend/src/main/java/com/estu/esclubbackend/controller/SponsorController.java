package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.dto.request.SponsorRequest;
import com.estu.esclubbackend.projections.SponsorProjection;
import com.estu.esclubbackend.repository.SponsorRepository;
import com.estu.esclubbackend.service.SponsorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/sponsors")
@AllArgsConstructor
public class SponsorController {

    private final SponsorService sponsorService;

    @GetMapping("/getAll")
    public ResponseEntity<List<SponsorProjection>> getAllSponsors() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.getAllSponsor());
    }

    @GetMapping("/getById")
    public ResponseEntity<SponsorDto> getSponsorById(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.getSponsorById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<SponsorDto> create(@Valid @RequestBody SponsorRequest request) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(sponsorService.createSponsor(request));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.deleteSponsor(id));
    }

    @PostMapping("/update")
    public ResponseEntity<SponsorDto> update(@Valid @RequestBody SponsorRequest request) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(sponsorService.updateSponsor(request));

    }

}
