package com.wcci.CampusLibraries.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.Set;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    @ManyToOne
    @JsonIgnore
    private Campus campus;
    @ManyToMany
    private Collection<Author> authors;

    private String description;
    private boolean available;

    public Book(String title, String description, boolean available, Campus campus, Author...authors) {
        this.title = title;
        this.description = description;
        this.available = available;
        this.campus = campus;
        this.authors = Arrays.asList(authors);
    }

    protected Book() {

    }

    public Campus getCampus() {
        return campus;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Collection<Author> getAuthors() {
        return authors;
    }

    public String getDescription() {
        return description;
    }

    public boolean isAvailable() {
        return available;
    }
}
