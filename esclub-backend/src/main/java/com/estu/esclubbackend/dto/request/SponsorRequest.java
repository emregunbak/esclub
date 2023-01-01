package com.estu.esclubbackend.dto.request;


import com.estu.esclubbackend.model.Club;
import com.estu.esclubbackend.model.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SponsorRequest {

    @NotNull
    private String sponsorName;

//    private Long sponsorId;

    @NotBlank
    private String description;

    //private MultipartFile logo;

    @NotBlank
    private Long clubId;
}
