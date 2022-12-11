package com.estu.esclubbackend.service;

import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.repository.ImageRepository;
import com.estu.esclubbackend.util.ImageUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;

    private final String downloadURL = "http://localhost:8080/api/v1/images/";

    public Image uploadImage(MultipartFile file) throws IOException {
        int count = imageRepository.findAllByNameContains(Objects.requireNonNull(file.getOriginalFilename())
                        .replace(" ","+")).size();

        Image image = imageRepository.save(Image.builder()
                .name(Objects.requireNonNull(file.getOriginalFilename()).replace(" ","+"))
                .type(file.getContentType())
                .imageURL(downloadURL + Objects.requireNonNull(file.getOriginalFilename()).replace(" ","+"))
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if (count > 0){
            image.setName(String.format("(%1$s)%2$s",count,image.getName()));
            image.setImageURL(downloadURL + image.getName());
        }
        return imageRepository.save(image);
    }

    public Image uploadImage(MultipartFile file, String fileName) throws IOException {
        Image image = imageRepository.save(Image.builder()
                .name(String.format("%s-LOGO.png",fileName))
                .type(file.getContentType())
                .imageURL(downloadURL+fileName+"-LOGO.png")
                .imageData(ImageUtils.compressImage(file.getBytes())).build());

        return imageRepository.save(image);
    }

    public byte[] downloadImage(String imageName){
        var image = imageRepository.findByName(imageName);
        return ImageUtils.decompressImage(image.getImageData());
    }

    public void deleteImageById(Long imageId){
        imageRepository.deleteById(imageId);
    }
}
