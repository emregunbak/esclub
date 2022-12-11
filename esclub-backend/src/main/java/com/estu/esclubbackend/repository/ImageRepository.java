package com.estu.esclubbackend.repository;

import com.estu.esclubbackend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    Image findByName(String name);
    List<Image> findAllByNameContains(String name);
}
