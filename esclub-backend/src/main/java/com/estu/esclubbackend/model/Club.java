package com.estu.esclubbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "club")
public class Club extends BaseEntity {

    private String clubName;
    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Event> events;

    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Announcement> announcements;

    @ManyToMany(mappedBy = "club")
    private List<Sponsor> sponsors;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<User> members;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<User> team;

    @OneToOne
    private Image logo;
}
