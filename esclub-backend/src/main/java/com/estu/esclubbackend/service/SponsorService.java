package com.estu.esclubbackend.service;


import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.dto.converter.SponsorDtoConverter;
import com.estu.esclubbackend.dto.request.SponsorRequest;
import com.estu.esclubbackend.enums.ErrorCode;
import com.estu.esclubbackend.exception.GenericException;
import com.estu.esclubbackend.model.Sponsor;
import com.estu.esclubbackend.projections.EventProjection;
import com.estu.esclubbackend.projections.SponsorProjection;
import com.estu.esclubbackend.repository.SponsorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SponsorService {

    private final SponsorRepository sponsorRepository;

    public List<SponsorProjection> getAllSponsor() {
        return sponsorRepository.findAllBy(SponsorProjection.class);
    }

    public SponsorDto getSponsorById(Long id) {
        return SponsorDtoConverter.convertToSponsorDto(sponsorRepository.findById(id).orElseThrow(() ->
                GenericException.builder().errorCode(ErrorCode.ANNOUNCEMENT_NOT_FOUND).build()));
    }

    public SponsorDto createSponsor(SponsorRequest sponsorRequest) {
        var club = sponsorRepository.findById(sponsorRequest.getSponsorId()).get();

        var sponsor = sponsorRepository.save(Sponsor.builder()
                .sponsorName(sponsorRequest.getSponsorName())
                .logo(sponsorRequest.getLogo())
                .club(sponsorRequest.getClub())
                .description(sponsorRequest.getDescription())
                .build());
        return SponsorDtoConverter.convertToSponsorDto(sponsor);
    }

    public SponsorDto updateSponsor(SponsorRequest request) {
        Sponsor sponsor = sponsorRepository.findById(request.getSponsorId()).orElseThrow();
        sponsor.setSponsorName(request.getSponsorName());
        sponsor.setDescription(request.getDescription());
        sponsor.setLogo(request.getLogo());
        sponsor.setClub(request.getClub());
        return SponsorDtoConverter.convertToSponsorDto(sponsor);
    }

    public String deleteSponsor(Long id) {
        sponsorRepository.deleteById(id);
        return "Delete Sponsor : " + id;
    }
}
