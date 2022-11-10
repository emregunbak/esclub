package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Announcement extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;

    @Column
    private String title;

    @Column
    private String body;
}
