package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.ClubInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubInfoRepository extends JpaRepository<ClubInfo, Long> {
}
