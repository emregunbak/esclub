package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.dto.*;
import com.estu.esclubbackend.dto.converter.ClubDtoConverter;
import com.estu.esclubbackend.dto.converter.ImageDtoConverter;
import com.estu.esclubbackend.dto.request.ClubAdminCreateRequest;
import com.estu.esclubbackend.dto.request.LoginRequest;
import com.estu.esclubbackend.enums.Role;
import com.estu.esclubbackend.model.ClubInfo;
import com.estu.esclubbackend.model.User;
import com.estu.esclubbackend.service.AuthService;
import com.estu.esclubbackend.service.ClubService;
import com.estu.esclubbackend.service.ImageService;
import com.estu.esclubbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
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
    private final UserService userService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<List<ClubDto>> getAllClubs(){
        return ResponseEntity.ok(clubService.getAllClubs());
    }

    @GetMapping("/club/{clubId}")
    public ResponseEntity<ClubDetailsDto> getClubById(@PathVariable Long clubId){
        ClubDetailsDto clubDetailsDto = ClubDtoConverter.converToClubDetailsDto(clubService.getClubById(clubId));
        return ResponseEntity.ok(clubDetailsDto);
    }

    @GetMapping("/club")
    public ResponseEntity<ClubDetailsDto> getClubByShortName(@RequestParam String shortName){
        return ResponseEntity.ok(clubService.getClubByShortName(shortName));
    }

    @GetMapping("/details")
    public ResponseEntity<List<ClubDetailsDto>> getAllClubDetails(){
        return ResponseEntity.ok(clubService.getAllClubDetails());
    }

    @GetMapping("/details/{clubId}")
    public ResponseEntity<ClubDetailsDto> getAllClubDetailsById(@PathVariable Long clubId){
        return ResponseEntity.ok(clubService.getAllClubDetailsById(clubId));
    }

    @PostMapping("/create")
    public ResponseEntity<ClubCreateResponse> createClub(
            @RequestParam String clubName,
            @RequestParam String shortName,
            @RequestParam MultipartFile logo) throws Exception {
        var clubLogo = imageService.uploadImage(logo, shortName.toUpperCase());
        ClubDto club = ClubDto.builder().clubName(clubName).shortName(shortName).logo(clubLogo).build();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(clubService.createClub(club));
    }

    @PutMapping("/update/{clubId}")
    public ResponseEntity<ClubCreateResponse> updateClub(
            @PathVariable Long clubId,
            @RequestParam String clubName,
            @RequestParam String shortName,
            @RequestParam MultipartFile logo) throws IOException {
        return ResponseEntity.ok(clubService.updateClub(clubId, clubName, shortName, logo));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClub(@PathVariable Long id){
        return ResponseEntity.ok(clubService.deleteClub(id));
    }

    @PutMapping("/create-club-info/{clubId}")
    public ResponseEntity<ClubDetailsDto> createClubInfo(
            @PathVariable Long clubId, @RequestBody ClubInfo clubInfo
    ){
        return ResponseEntity.ok(clubService.createClubInfo(clubId, clubInfo));
    }
}
