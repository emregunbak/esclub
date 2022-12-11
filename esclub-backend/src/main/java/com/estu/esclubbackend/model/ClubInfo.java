package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClubInfo extends BaseEntity{

    private String title;

    @Column(length = 2000)
    private String summary;

    @Column(length = 4000)
    private String description;
}
