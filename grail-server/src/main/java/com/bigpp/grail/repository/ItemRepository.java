package com.bigpp.grail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bigpp.grail.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByFound(boolean found);
    List<Item> findByQuality(String quality);
}
