package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.dto.ClubCreateResponse;
import com.estu.esclubbackend.dto.converter.ClubDtoConverter;
import com.estu.esclubbackend.dto.converter.ImageDtoConverter;
import com.estu.esclubbackend.enums.ErrorCode;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.repository.ClubRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClubService {
    private final ClubRepository clubRepository;

    public List<ClubDto> getAllClubs(){
        return clubRepository.findAll().stream().map(ClubDtoConverter::convertToClubDto).toList();
    }

    public ClubCreateResponse createClub(ClubDto club){
        var savedClub = clubRepository.save(Club.builder()
                .clubName(club.getClubName())
                .shortName(club.getShortName())
                .events(club.getEvents())
                .announcements(club.getAnnouncements())
                .sponsors(club.getSponsors())
                .members(club.getMembers())
                .team(club.getTeam())
                .logo(club.getLogo()).build());

        return ClubCreateResponse.builder()
                .id(savedClub.getId())
                .clubName(savedClub.getClubName())
                .shortName(savedClub.getShortName())
                .logo(ImageDtoConverter.convertToImageDto(savedClub.getLogo())).build();
    }

    public String deleteClub(Long id){
        clubRepository.deleteById(id);
        return String.format("Deleted club id: %s", id);
    }
}
