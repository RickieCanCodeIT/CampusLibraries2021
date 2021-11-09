package com.wcci.CampusLibraries.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
import java.util.Set;

@Entity
public class Author {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String bio;

    @ManyToMany(mappedBy = "authors")
    @JsonIgnore
    private Collection<Book> books;

    public Author(String name, String bio) {
        this.name = name;
        this.bio = bio;
    }

    protected Author() {

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBio() {
        return bio;
    }

    public Collection<Book> getBooks() {
        return books;
    }
}
