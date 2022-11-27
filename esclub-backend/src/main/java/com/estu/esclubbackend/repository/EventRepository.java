package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Long> {
    @Query("from Event where eventStatus <> com.estu.esclubbackend.enums.EventStatus.COMPLETED")
    List<Event> findAllNotCompleted();

}
