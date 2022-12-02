package com.estu.esclubbackend.projections;

import com.estu.esclubbackend.enums.EventStatus;

import java.time.LocalDateTime;

public interface SponsorProjection {

    String getSponsorName();


    String getDescription();

    String getLogo();
}
