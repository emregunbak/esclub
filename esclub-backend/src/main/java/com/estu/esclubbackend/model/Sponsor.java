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
public class Sponsor extends BaseEntity{
    private String sponsorName;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "club_sponsors",
    joinColumns = @JoinColumn(name = "club_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "sponsor_id",
    referencedColumnName = "id"))
    private List<Club> club;
    private String description;

    @OneToOne
    private Image logo;
}
