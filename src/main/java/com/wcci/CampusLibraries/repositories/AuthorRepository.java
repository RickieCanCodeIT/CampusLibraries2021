package com.wcci.CampusLibraries.repositories;

import com.wcci.CampusLibraries.model.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author, Long> {
}
