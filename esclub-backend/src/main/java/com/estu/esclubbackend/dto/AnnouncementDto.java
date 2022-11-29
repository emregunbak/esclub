package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Image;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnnouncementDto {
    private Long id;
    private Long clubId;
    private String title;
    private String body;
    @JsonIgnore
    private List<Image> image; //image urlleri listelenecek
    private String imageURL;
}
