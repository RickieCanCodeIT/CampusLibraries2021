package com.wcci.CampusLibraries;

import com.wcci.CampusLibraries.model.Author;
import com.wcci.CampusLibraries.model.Book;
import com.wcci.CampusLibraries.model.Campus;
import com.wcci.CampusLibraries.repositories.AuthorRepository;
import com.wcci.CampusLibraries.repositories.BookRepository;
import com.wcci.CampusLibraries.repositories.CampusRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private BookRepository bookRepo;
    private AuthorRepository authorRepo;
    private CampusRepository campusRepo;

    public Populator(BookRepository bookRepo, AuthorRepository authorRepo, CampusRepository campusRepo) {
        this.bookRepo = bookRepo;
        this.authorRepo = authorRepo;
        this.campusRepo = campusRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Author author1 = new Author("J.R.R. Tolkien", "Made a lot of stuff");
        authorRepo.save(author1);
        Campus campus1 = new Campus("Columbus", "Java");
        campusRepo.save(campus1);
        Book book1 = new Book("The Fellowship of the Ring", "Really good book", true, campus1, author1);
        bookRepo.save(book1);

        Campus campus2 = new Campus("Moab", "C++");
        campusRepo.save(campus2);

        Campus campus3 = new Campus("Florida", "Python");
        campusRepo.save(campus3);
    }
}
