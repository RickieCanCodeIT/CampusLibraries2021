package com.wcci.CampusLibraries.repositories;

import org.springframework.data.repository.CrudRepository;
import com.wcci.CampusLibraries.model.Book;


public interface BookRepository extends CrudRepository<Book, Long> {
}
