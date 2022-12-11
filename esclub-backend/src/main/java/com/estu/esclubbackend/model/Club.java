package com.estu.esclubbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "club")
public class Club extends BaseEntity {

    @Column(unique = true)
    private String clubName;
    @Column(unique = true)
    private String shortName;

    @JsonIgnore
    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Event> events;

    @JsonIgnore
    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Announcement> announcements;

    @JsonIgnore
    @ManyToMany(mappedBy = "club")
    private List<Sponsor> sponsors;

    @OneToOne
    private Image logo;

//    @OneToOne
//    private User admin;

//    @JsonIgnore
//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private List<User> members;

//    @JsonIgnore
//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private List<User> team;



    @OneToOne
    private ClubInfo clubInfo;
}
