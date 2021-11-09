package com.wcci.CampusLibraries.controllers;

import com.wcci.CampusLibraries.model.Campus;
import com.wcci.CampusLibraries.repositories.AuthorRepository;
import com.wcci.CampusLibraries.repositories.BookRepository;
import com.wcci.CampusLibraries.repositories.CampusRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/campuses")
public class CampusController {

    private CampusRepository campusRepo;
    private BookRepository bookRepo;
    private AuthorRepository authorRepo;

    public CampusController(CampusRepository campusRepo, BookRepository bookRepo, AuthorRepository authorRepo) {
        this.campusRepo = campusRepo;
        this.bookRepo = bookRepo;
        this.authorRepo = authorRepo;
    }

    @GetMapping("/")
    public Iterable<Campus> retrieveAllCampuses() {
        return campusRepo.findAll();
    }
}
