package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.service.ClubService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clubs")
@AllArgsConstructor
public class ClubController {
    private final ClubService clubService;

    @GetMapping
    public ResponseEntity<List<ClubDto>> getAllClubs(){
        return ResponseEntity.ok(clubService.getAllClubs());
    }

    @PostMapping("/create")
    public ResponseEntity<ClubDto> createClub(@RequestBody ClubDto club){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(clubService.createClub(club));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClub(@PathVariable Long id){
        return ResponseEntity.ok(clubService.deleteClub(id));
    }
}
