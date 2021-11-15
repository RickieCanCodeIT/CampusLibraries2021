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

}
