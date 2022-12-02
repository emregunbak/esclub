package com.estu.esclubbackend.dto;

import com.estu.esclubbackend.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageDto {
    private Long id;
    private String name;
    private String type;
}
