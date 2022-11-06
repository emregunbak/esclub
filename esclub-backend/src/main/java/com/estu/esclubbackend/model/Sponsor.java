package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Sponsor extends BaseEntity{
    private String sponsorName;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "club_sponsors",
    joinColumns = @JoinColumn(name = "club_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "sponsor_id",
    referencedColumnName = "id"))
    private List<Club> club;
    private String description;
//    private Image logo;
}
