package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Event extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;
    private String eventName;
    private LocalDateTime StartDate;
    private LocalDateTime EndDate;
    private String description;
}
