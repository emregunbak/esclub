package com.estu.esclubbackend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnnouncementRequest {

    @NotNull
    private Long clubId;
    @NotBlank
    private String title;
    @NotBlank
    private String body;
    private List<MultipartFile> images;
    private String imageURL;
}
