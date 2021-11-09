package com.wcci.CampusLibraries.controllers;

import com.wcci.CampusLibraries.model.Author;
import com.wcci.CampusLibraries.model.Book;
import com.wcci.CampusLibraries.repositories.AuthorRepository;
import com.wcci.CampusLibraries.repositories.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    private BookRepository bookRepo;
    private AuthorRepository authorRepo;

    public BookController(BookRepository bookRepo, AuthorRepository authorRepo) {
        this.bookRepo = bookRepo;
        this.authorRepo = authorRepo;
    }

    @GetMapping("/")
    public Iterable<Book> retrieveAllBooks() {
        return bookRepo.findAll();
    }

    @PostMapping("/")
    public Iterable<Book>  addBook(@RequestBody Book bookToAdd) {
        Collection<Author> tempAuthors = bookToAdd.getAuthors();
        for (Author currentAuthor: tempAuthors) {
            Optional<Author> authorExists = authorRepo.findById(currentAuthor.getId());
            if (authorExists.isEmpty()) {
                authorRepo.save(currentAuthor);
            }
        }
        bookRepo.save(bookToAdd);
        return bookRepo.findAll();
    }
}
