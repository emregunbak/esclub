package com.estu.esclubbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventDto {

    private String eventName;
    private String description;
    private Long eventId;
    private Long clubId;
    private String clubName;
}
