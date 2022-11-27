package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.dto.converter.ClubDtoConverter;
import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.repository.ClubRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClubService {
    private final ClubRepository clubRepository;

    public List<ClubDto> getAllClubs(){
        return clubRepository.findAll().stream().map(ClubDtoConverter::convertToClubDto).toList();
    }

    public ClubDto createClub(ClubDto club){
        var savedClub = clubRepository.save(Club.builder()
                .clubName(club.getClubName())
                .events(club.getEvents())
                .announcements(club.getAnnouncements())
                .sponsors(club.getSponsors())
                .members(club.getMembers())
                .team(club.getTeam()).build());
        return ClubDtoConverter.convertToClubDto(savedClub);
    }

    public String deleteClub(Long id){
        clubRepository.deleteById(id);
        return String.format("Deleted club id: %s", id);
    }
}
