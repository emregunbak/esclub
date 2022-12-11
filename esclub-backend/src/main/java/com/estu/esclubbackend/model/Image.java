package com.estu.esclubbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "images")
public class Image extends BaseEntity {
    private String name;
    private String type;
    @JsonIgnore
    @Lob
    private byte[] imageData;
    private String imageURL;
}
