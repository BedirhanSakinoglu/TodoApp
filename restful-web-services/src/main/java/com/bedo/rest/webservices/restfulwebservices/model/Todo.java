package com.bedo.rest.webservices.restfulwebservices.model;

import java.util.Date;

public class Todo {
    private long id;
    private String username;
    private String description;
    private Date dueDate;
    private boolean isDone;

    public Todo(long id, String username, String description, Date dueDate, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    public Todo(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public boolean getIsDone() {
        return isDone;
    }

    public void setIsDone(boolean isDone) {
        this.isDone = isDone;
    }
}
