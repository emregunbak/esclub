package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Club extends BaseEntity{

    @Column
    private String clubName;
    @OneToMany
    private List<Event> events;
    @OneToMany(mappedBy = "club")
    private List<Announcement> announcements;
    @ManyToMany(mappedBy = "clubs")
    private List<Sponsor> sponsors;
//    @OneToMany
//    private List<Student> members;
//    @OneToMany
//    private List<ClubAdmin> team;
}
