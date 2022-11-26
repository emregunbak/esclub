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
@Table(name = "club")
public class Club extends BaseEntity{

    private String clubName;
    @OneToMany
    private List<Event> events;
    @OneToMany(mappedBy = "club")
    private List<Announcement> announcements;
    @ManyToMany(mappedBy = "club")
    private List<Sponsor> sponsors;
//    @OneToMany
//    private List<Student> members;
//    @OneToMany
//    private List<ClubAdmin> team;
}