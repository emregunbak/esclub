package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.AnnouncementDto;
import com.estu.esclubbackend.dto.converter.AnnouncementDtoConverter;
import com.estu.esclubbackend.dto.converter.MultipartFileConverter;
import com.estu.esclubbackend.dto.request.AnnouncementRequest;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Announcement;
import com.estu.esclubbackend.model.ErrorCode;
import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.repository.AnnouncementRepository;
import com.estu.esclubbackend.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnouncementService {
    private final AnnouncementRepository announcementRepository;
    private final ClubRepository clubRepository; //Club servis kullanılacak

    public List<AnnouncementDto> getAllAnnouncements(){
        return announcementRepository.findAll().stream()
                .map(AnnouncementDtoConverter::convertToAnnouncementDto)
                .toList();
    }

    public AnnouncementDto getAnnouncementById(Long id){
        return AnnouncementDtoConverter.convertToAnnouncementDto(announcementRepository.findById(id).orElseThrow(() ->
                GenericException.builder().errorCode(ErrorCode.ANNOUNCEMENT_NOT_FOUND).build()));
    }

    public AnnouncementDto createAnnouncement(AnnouncementRequest request){
        if (request.getImages() != null){
            var images = request.getImages().stream().map(file ->
                    Image.builder().image(MultipartFileConverter.convert(file)).build()).toList();

            var announcement = announcementRepository.save(Announcement.builder()
                    .club(clubRepository.findById(request.getClubId()).get())
                    .title(request.getTitle())
                    .body(request.getBody())
                    .images(images).build());
            return AnnouncementDtoConverter.convertToAnnouncementDto(announcement);
        }
        var announcement = announcementRepository.save(Announcement.builder()
                .club(clubRepository.findById(request.getClubId()).get())
                .title(request.getTitle())
                .body(request.getBody()).build());

        return AnnouncementDtoConverter.convertToAnnouncementDto(announcement);
    }
}
