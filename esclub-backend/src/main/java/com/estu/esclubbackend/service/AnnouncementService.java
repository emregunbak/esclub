package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.dto.converter.AnnouncementDtoConverter;
import com.estu.esclubbackend.dto.converter.MultipartFileConverter;
import com.estu.esclubbackend.dto.request.AnnouncementRequest;
import com.estu.esclubbackend.enums.ErrorCode;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Announcement;
import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.repository.AnnouncementRepository;
import com.estu.esclubbackend.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnouncementService {
    private final AnnouncementRepository announcementRepository;
    private final ClubRepository clubRepository; //Club servis kullanılacak
    private final ClubService clubService;
    private final ImageService imageService;

    public List<AnnouncementDto> getAllAnnouncements() {
        return announcementRepository.findAll().stream()
                .map(AnnouncementDtoConverter::convertToAnnouncementDto)
                .toList();
    }

    public AnnouncementDto getAnnouncementByClubId(Long clubId){
        return AnnouncementDtoConverter.convertToAnnouncementDto(announcementRepository.findAnnouncementByClubId(clubId));
    }

    public AnnouncementDto getAnnouncementById(Long id) {
        return AnnouncementDtoConverter.convertToAnnouncementDto(announcementRepository.findById(id).orElseThrow(() ->
                GenericException.builder().errorCode(ErrorCode.ANNOUNCEMENT_NOT_FOUND)
                        .errorMessage("not found")
                        .httpStatus(HttpStatus.NOT_FOUND).build()));
    }

    public AnnouncementDto createAnnouncement(AnnouncementRequest request) {
//        if (request.getImages().stream().findFirst().get().getSize() > 0) {
//            var images = request.getImages().stream().map(image ->
//            {
//                try {
//                    return imageService.uploadImage(image);
//                } catch (IOException e) {
//                    throw new RuntimeException(e);
//                }
//            }).toList();
//
//            var announcement = announcementRepository.save(Announcement.builder()
//                    .club(clubService.getClubById(request.getClubId()))
//                    .title(request.getTitle())
//                    .body(request.getBody())
//                    .images(images).build());
//            return AnnouncementDtoConverter.convertToAnnouncementDto(announcement);
//        }
        var announcement = announcementRepository.save(Announcement.builder()
                .club(clubService.getClubById(request.getClubId()))
                .title(request.getTitle())
                .body(request.getBody()).build());

        return AnnouncementDtoConverter.convertToAnnouncementDto(announcement);
    }

    public String deleteAnnouncement(Long id){
        announcementRepository.deleteById(id);
        return String.format("Deleted announcement id: %s", id);
    }

    public AnnouncementDto updateAnnouncement(Long id, AnnouncementRequest request) {
        var announcement = announcementRepository.findById(id).orElseThrow(()->
                GenericException.builder()
                        .errorCode(ErrorCode.ANNOUNCEMENT_NOT_FOUND)
                        .errorMessage("Announcement not found")
                        .httpStatus(HttpStatus.NOT_FOUND).build());
        announcement.setBody(request.getBody());
        announcement.setTitle(request.getTitle());
        announcement.setClub(clubService.getClubById(request.getClubId()));
        announcement.setUpdateDate(LocalDateTime.now());
        if (false){//request.getImages() != null
//            announcement.setImages(request.getImages().stream().map(image ->
//            {
//                try {
//                    return imageService.uploadImage(image);
//                } catch (IOException e) {
//                    throw new RuntimeException(e);
//                }
//            }).toList());
        }else{
            announcement.setImages(new ArrayList<>());
        }

        return AnnouncementDtoConverter.convertToAnnouncementDto(announcementRepository.save(announcement));
    }
}
