package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.enums.EventStatus;
import com.estu.esclubbackend.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventDto {

    private String eventName;
    private String description;
    private Long eventId;
    private Long clubId;
    private List<ImageDto> images;
}
