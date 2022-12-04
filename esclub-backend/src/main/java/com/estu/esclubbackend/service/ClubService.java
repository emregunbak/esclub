package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.ClubDetailsDto;
import com.estu.esclubbackend.dto.ClubDto;
import com.estu.esclubbackend.dto.ClubCreateResponse;
import com.estu.esclubbackend.dto.converter.ClubDtoConverter;
import com.estu.esclubbackend.dto.converter.ImageDtoConverter;
import com.estu.esclubbackend.enums.ErrorCode;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.model.ClubInfo;
import com.estu.esclubbackend.repository.ClubInfoRepository;
import com.estu.esclubbackend.repository.ClubRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ClubService {
    private final ClubRepository clubRepository;
    private final ClubInfoRepository clubInfoRepository;
    private final ImageService imageService;

    public List<ClubDto> getAllClubs(){
        return clubRepository.findAll().stream().map(ClubDtoConverter::convertToClubDto).toList();
    }

    public ClubCreateResponse createClub(ClubDto club) throws Exception {
        try {
            var savedClub = clubRepository.save(Club.builder()
                    .clubName(club.getClubName())
                    .shortName(club.getShortName().toUpperCase())
                    .events(club.getEvents())
                    .announcements(club.getAnnouncements())
                    .sponsors(club.getSponsors())
                    .members(club.getMembers())
                    .team(club.getTeam())
                    .logo(club.getLogo()).build());

            return ClubCreateResponse.builder()
                    .id(savedClub.getId())
                    .clubName(savedClub.getClubName())
                    .shortName(savedClub.getShortName().toUpperCase())
                    .logo(ImageDtoConverter.convertToImageDto(savedClub.getLogo())).build();
        }catch (Exception JdbcSQLIntegrityConstraintViolationException){
            imageService.deleteImageById(club.getLogo().getId());
            throw GenericException.builder()
                    .httpStatus(HttpStatus.BAD_REQUEST)
                    .errorMessage(String.format("Club %s already exist", club.getShortName()))
                    .errorCode(ErrorCode.BAD_REQUEST).build();
        }
    }

    public String deleteClub(Long id){
        clubRepository.deleteById(id);
        return String.format("Deleted club id: %s", id);
    }

    public List<ClubDetailsDto> getAllClubDetails() {
        return clubRepository.findAll().stream().map(ClubDtoConverter::converToClubDetailsDto).toList();
    }

    public ClubDetailsDto getAllClubDetailsById(Long clubId) {
        return ClubDtoConverter.converToClubDetailsDto(clubRepository.findById(clubId).get());
    }

    public Club getClubById(Long clubId){
        return clubRepository.findById(clubId).orElseThrow(() ->
                GenericException.builder()
                        .httpStatus(HttpStatus.NOT_FOUND)
                        .errorMessage("Club not found")
                        .errorCode(ErrorCode.CLUB_NOT_FOUND).build());
    }

    public ClubDetailsDto getClubByShortName(String shortName){
        return ClubDtoConverter.converToClubDetailsDto(clubRepository.findClubByShortName(shortName.toUpperCase()));
    }

    public ClubCreateResponse updateClub(Long clubId, String clubName, String shortName, MultipartFile logo) throws IOException {
        Club club = clubRepository.findById(clubId).get();
        club.setClubName(clubName);
        club.setShortName(shortName);
        club.setLogo(imageService.uploadImage(logo));
        club.setUpdateDate(LocalDateTime.now());
        return ClubDtoConverter.convertToClubCreateResponse(clubRepository.save(club));
    }

    public ClubDetailsDto createClubInfo(Long clubId, @ModelAttribute ClubInfo clubInfo){
        clubInfoRepository.save(clubInfo);

        Club club = clubRepository.findById(clubId).get();
        club.setClubInfo(clubInfo);
        return ClubDtoConverter.converToClubDetailsDto(clubRepository.save(club));
    }
}
