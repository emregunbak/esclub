package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "sponsor")
public class Sponsor extends BaseEntity {
    private String sponsorName;
    @ManyToOne
    @JoinColumn(name = "club_id", referencedColumnName = "id")
    private Club club;

    private String description;

    @OneToOne
    private Image logo;
}
