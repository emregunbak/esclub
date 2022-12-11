package com.estu.esclubbackend.dto.request;

import com.estu.esclubbackend.dto.ImageDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClubCreateRequest {

    @NotBlank
    private String clubName;
    @NotBlank
    private String shortName;
    private MultipartFile logo;
}
