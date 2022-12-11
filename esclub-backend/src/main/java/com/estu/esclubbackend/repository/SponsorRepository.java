package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Sponsor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SponsorRepository extends JpaRepository<Sponsor, Long> {
    <P> List<P> findAllBy(Class<P> projection);
}
