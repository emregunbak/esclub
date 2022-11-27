package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnnouncementDto {
    private Long id;
    private Long clubId;
    private String title;
    private String body;
    private List<Image> image;
}
