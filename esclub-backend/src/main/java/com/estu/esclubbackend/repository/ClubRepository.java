package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    Club findClubByShortName(String shortName);
}
