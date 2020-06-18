package io.helidon.demo.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
//import javax.persistence.QueryHint;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity(name = "Notes")
@Table(name = "NOTES")
@NamedQuery(name = "Notes.AllNotes", query = "SELECT n FROM Notes n ORDER BY n.id")//, hints = @QueryHint(name = "org.hibernate.cacheable", value = "false"))
public class Note {

    @Id
    @Column(name = "ID",
            unique = true)
    @SequenceGenerator(name = "noteSeq", sequenceName = "notes_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="noteSeq")
    private Long id;

    @Column(name = "NAME",
            unique = false)
    private String name;

    @Column(name = "CONTENTS",
            unique = false)
    private String contents;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String newContent) {
        this.contents = newContent;
    }

}