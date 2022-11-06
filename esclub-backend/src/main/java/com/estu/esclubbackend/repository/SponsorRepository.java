package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Sponsor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SponsorRepository extends JpaRepository<Sponsor, Long> {
}
