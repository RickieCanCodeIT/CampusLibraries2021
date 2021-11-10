package com.wcci.CampusLibraries.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Campus {
    @Id
    @GeneratedValue
    private Long id;
    private String location;
    private String techStack;
    @OneToMany(mappedBy = "campus", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Book> books;

    public Campus(String location, String techStack) {
        this.location = location;
        this.techStack = techStack;
    }

    protected Campus() {

    }

    public void setLocation(String newLocation) {
        location = newLocation;
    }

    public Long getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getTechStack() {
        return techStack;
    }

    public Collection<Book> getBooks() {
        return books;
    }
}
