package com.estu.esclubbackend.model;

import com.estu.esclubbackend.enums.EventStatus;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "event")
public class Event extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;
    private String eventName;
    private LocalDateTime StartDate;
    private LocalDateTime EndDate;
    private String description;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;
    @Enumerated(EnumType.STRING)
    private EventStatus eventStatus;
}
