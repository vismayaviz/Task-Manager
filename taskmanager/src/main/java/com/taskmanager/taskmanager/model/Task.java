package com.taskmanager.taskmanager.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Data
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime startedDate;
    private LocalDateTime completedDate;

    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();

        if ("STARTED".equalsIgnoreCase(this.status) && this.startedDate == null) {
            this.startedDate = LocalDateTime.now();
        }
    }

    @PreUpdate
    public void onUpdate() {
        if ("STARTED".equalsIgnoreCase(this.status) && this.startedDate == null) {
            this.startedDate = LocalDateTime.now();
        }

        if ("COMPLETED".equalsIgnoreCase(this.status) && this.completedDate == null) {
            this.completedDate = LocalDateTime.now();
        }
    }
}

