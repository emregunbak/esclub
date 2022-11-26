package com.estu.esclubbackend.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "users")
public class User extends BaseEntity{

    @Column
    private String name;

    @Column
    private String surname;

    @Column
    private String email;
    //spring email

}
