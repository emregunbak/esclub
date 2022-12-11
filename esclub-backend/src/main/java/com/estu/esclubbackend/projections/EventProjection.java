package com.estu.esclubbackend.projections;

import com.estu.esclubbackend.enums.EventStatus;

import java.time.LocalDateTime;

public interface EventProjection {

    ClubProjection getClub();

    String getEventName();

    LocalDateTime getStartDate();

    LocalDateTime getEndDate();

    String getDescription();

    EventStatus getEventStatus();

}
