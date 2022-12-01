package com.estu.esclubbackend.service;

import com.estu.esclubbackend.dto.ImageDto;
import com.estu.esclubbackend.dto.converter.ImageDtoConverter;
import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.repository.ImageRepository;
import com.estu.esclubbackend.util.ImageUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;

    public Image uploadImage(MultipartFile file) throws IOException {
        Image image = imageRepository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());

        return imageRepository.save(image);
    }

    public Image uploadImage(MultipartFile file, String fileName) throws IOException {
        Image image = imageRepository.save(Image.builder()
                .name(String.format("%s-logo.png",fileName))
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());

        return imageRepository.save(image);
    }

    public byte[] downloadImage(String fileName){
        var image = imageRepository.findByName(fileName);
        return ImageUtils.decompressImage(image.get().getImageData());
    }
}
