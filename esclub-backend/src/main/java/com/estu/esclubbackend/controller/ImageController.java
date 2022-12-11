package com.estu.esclubbackend.controller;

import com.estu.esclubbackend.model.Image;
import com.estu.esclubbackend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/images")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @PostMapping("/upload-file")
    public ResponseEntity<Image> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.status(HttpStatus.OK)
                .body(imageService.uploadImage(file));
    }

    @GetMapping("/{imageName}") // imageURL = /api/v1/images/{imageName}
    public ResponseEntity<?> downloadImage(@PathVariable String imageName){
        var imageData = imageService.downloadImage(imageName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.IMAGE_PNG)
                .body(imageData);
    }
}
