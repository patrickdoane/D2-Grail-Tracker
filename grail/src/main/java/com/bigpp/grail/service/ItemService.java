package com.bigpp.grail.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bigpp.grail.model.Item;
import com.bigpp.grail.repository.ItemRepository;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item addItem(Item item) {
        return itemRepository.save(item);
    }
    
    public List<Item> findByFound(boolean found) {
    	return itemRepository.findByFound(found);
    }
    
    public List<Item> findByQuality(String quality) {
    	return itemRepository.findByQuality(quality);
    }

    public void updateItem(Long id, Item item) {
    	item.setId(id);
        itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
