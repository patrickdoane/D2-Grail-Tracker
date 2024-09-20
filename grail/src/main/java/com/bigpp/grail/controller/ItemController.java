package com.bigpp.grail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bigpp.grail.model.Item;
import com.bigpp.grail.service.ItemService;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @CrossOrigin
    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/found/{found}")
    public List<Item> getFoundItems(@PathVariable boolean found) {
    	return itemService.findByFound(found);
    }
    
    @CrossOrigin
    @GetMapping("/uniques")
    public List<Item> getUniqueItems() {
    	return itemService.findByQuality("unique");
    }

    @CrossOrigin
    @GetMapping("/sets")
    public List<Item> getSetItems() {
    	return itemService.findByQuality("set");
    }

    @CrossOrigin
    @GetMapping("/other")
    public List<Item> getOtherItems() {
    	return itemService.findByQuality("other");
    }
    
    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        itemService.updateItem(id, item);
        return ResponseEntity.ok(item);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
