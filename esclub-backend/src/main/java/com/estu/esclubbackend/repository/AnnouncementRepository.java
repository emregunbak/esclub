package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    Announcement findAnnouncementByClubId(Long clubId);
}
