package com.example.demo.controller;

import com.example.demo.entity.Game;
import com.example.demo.repository.GameRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/games")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GameController {
    @Autowired
    GameRepository gameRepo;

    @RequestMapping("")
    public ResponseEntity<Object> findGames() {
        return ResponseEntity.ok(gameRepo.findAll());
    }

    // @GetMapping("/{id}")
    // public Game getGame(@PathVariable long id) throws Exception {
    // public Game getGame(@PathVariable("id") Long id) throws Exception {
    //     return gameRepo.findById(id).orElseThrow(() -> new Exception("id not found - " + id));
    // }

    @GetMapping("/{id}")
    public Game findGame(@PathVariable Long id) {
        return gameRepo.findById(id).orElseThrow();
    }

    @PostMapping("")
    public Game newGame(@RequestBody Game game) {
        return gameRepo.save(game);
    }

    @DeleteMapping("/{id}")
	public void deleteGame(@PathVariable("id") Long id) {
		gameRepo.deleteById(id);
	}
}
