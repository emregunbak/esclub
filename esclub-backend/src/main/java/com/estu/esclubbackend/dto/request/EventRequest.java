package com.estu.esclubbackend.dto.request;

import com.estu.esclubbackend.enums.EventStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EventRequest {
    @NotNull
    private String eventName;
    @NotNull
    private Long clubId;

    private Long eventId;
    @NotBlank
    private String description;


}
