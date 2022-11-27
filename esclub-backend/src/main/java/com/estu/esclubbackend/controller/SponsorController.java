package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.model.Sponsor;
import com.estu.esclubbackend.repository.SponsorRepository;
import com.estu.esclubbackend.service.SponsorService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/sponsors")
@AllArgsConstructor
public class SponsorController {

    private final SponsorService sponsorService;
    private final SponsorRepository sponsorRepository;

    @GetMapping
    public ResponseEntity<List<SponsorDto>> getAllSponsors(){
        return ResponseEntity.ok(sponsorService.getAllSponsor());
    }

    @PostMapping("/create")
    public ResponseEntity<SponsorDto> create(@RequestBody SponsorDto sponsorDto) {
        return ResponseEntity.ok(sponsorService.createSponsor(sponsorDto));
    }

    @PostMapping("/{id}")
    public void update(@PathVariable("id") Long id, @RequestBody SponsorDto sponsorDto){
        Sponsor sponsor = sponsorRepository.findById(id).orElseThrow();
        sponsor.setSponsorName(sponsorDto.getSponsorName());
        sponsor.setDescription(sponsorDto.getDescription());
        sponsor.setLogo(sponsorDto.getLogo());
        sponsor.setUpdateDate(LocalDateTime.now());
        sponsorRepository.save(sponsor);
        sponsorService.updateSponsor(sponsorDto);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(sponsorService.deleteSponsor(id));
    }
}
