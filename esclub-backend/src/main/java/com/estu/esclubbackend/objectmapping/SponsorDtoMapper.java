package com.estu.esclubbackend.objectmapping;

import com.estu.esclubbackend.dto.SponsorDto;
import com.estu.esclubbackend.model.Sponsor;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public abstract class SponsorDtoMapper {
    public abstract Sponsor map(SponsorDto source);
}
