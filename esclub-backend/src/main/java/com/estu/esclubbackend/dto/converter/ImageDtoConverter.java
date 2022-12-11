package com.estu.esclubbackend.dto.converter;

import com.estu.esclubbackend.dto.ImageDto;
import com.estu.esclubbackend.model.Image;

public class ImageDtoConverter {
    public static ImageDto convertToImageDto(Image image){
        return ImageDto.builder()
                .id(image.getId())
                .name(image.getName())
                .type(image.getType())
                .imageURL(image.getImageURL()).build();
    }
}
