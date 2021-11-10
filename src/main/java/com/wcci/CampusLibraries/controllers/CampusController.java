package com.wcci.CampusLibraries.controllers;

import com.wcci.CampusLibraries.model.Author;
import com.wcci.CampusLibraries.model.Book;
import com.wcci.CampusLibraries.model.Campus;
import com.wcci.CampusLibraries.repositories.AuthorRepository;
import com.wcci.CampusLibraries.repositories.BookRepository;
import com.wcci.CampusLibraries.repositories.CampusRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

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

    @GetMapping("/{id}")
    public Campus retrieveSingleCampus(@PathVariable long id) {
        return campusRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Campus> addCampus(@RequestBody Campus campus) {
        campusRepo.save(campus);
        return campusRepo.findAll();
    }

    @PutMapping("/")
    public Iterable<Campus> editCampus(@RequestBody Campus campusToEdit) {
        if (campusToEdit.getId() != null) {
            campusRepo.save(campusToEdit);
        }
        return campusRepo.findAll();
    }

    @PatchMapping("/{id}/location")
    public Iterable<Campus> changeCampusLocation(@RequestBody String newLocation, @PathVariable Long id) {
        Campus campus = campusRepo.findById(id).get();
        campus.setLocation(newLocation);
        campusRepo.save(campus);
        return  campusRepo.findAll();
    }

    @PatchMapping("/{id}/book")
    public Iterable<Campus> addBooktoCampus(@RequestBody Book newBook, @PathVariable Long id) {
        Collection<Author> tempAuthors = newBook.getAuthors();
        for (Author currentAuthor: tempAuthors) {
            if (currentAuthor.getId() != null) {
                Optional<Author> authorExists = authorRepo.findById(currentAuthor.getId());
                if (authorExists.isEmpty()) {
                    authorRepo.save(currentAuthor);
                }
            }
            else {
                authorRepo.save(currentAuthor);
            }
        }

        Campus campusToAddBook = campusRepo.findById(id).get();
        newBook.addCampus(campusToAddBook);
        bookRepo.save(newBook);
        return campusRepo.findAll();
    }

    @DeleteMapping("/{id}")
    public Iterable<Campus> deleteCampus(@PathVariable Long id) {
        campusRepo.deleteById(id);
        return campusRepo.findAll();
    }
}
