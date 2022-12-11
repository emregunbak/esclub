package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "announcement")
public class Announcement extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "club_id", referencedColumnName = "id")
    private Club club;
    private String title;
    private String body;

    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.REMOVE, CascadeType.REFRESH, CascadeType.DETACH}, orphanRemoval = true)
    private List<Image> images;
}
