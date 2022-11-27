package com.estu.esclubbackend.service;


import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.dto.converter.SponsorDtoConverter;
import com.estu.esclubbackend.model.Sponsor;
import com.estu.esclubbackend.objectmapping.SponsorDtoMapper;
import com.estu.esclubbackend.repository.SponsorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SponsorService {

    private final SponsorRepository sponsorRepository;
    private final SponsorDtoMapper sponsorDtoMapper;

    public List<SponsorDto> getAllSponsor() {
        return sponsorRepository.findAll().stream().map(SponsorDtoConverter::convertToSponsorDto).toList();
    }

    public SponsorDto createSponsor(SponsorDto sponsorDto) {
        var club = sponsorRepository.findById(sponsorDto.getSponsorId()).get();

        var sponsor = sponsorRepository.save(Sponsor.builder()
                .sponsorName(sponsorDto.getSponsorName())
                .logo(sponsorDto.getLogo())
                .club(sponsorDto.getClub())
                .description(sponsorDto.getDescription())
                .build());
        return SponsorDtoConverter.convertToSponsorDto(sponsor);
    }

    public Sponsor updateSponsor(SponsorDto sponsorDto) {
        return sponsorRepository.save(sponsorDtoMapper.map(sponsorDto));
    }

    public String deleteSponsor(Long id) {
        sponsorRepository.deleteById(id);
        return String.format("Deleted club id: %s", id);
    }
}
