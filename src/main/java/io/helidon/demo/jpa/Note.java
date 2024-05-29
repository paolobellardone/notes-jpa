/*
 * MIT License
 *
 *  Copyright (c) 2022, 2024 PaoloB
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package io.helidon.demo.jpa;

import jakarta.persistence.Access;
import jakarta.persistence.AccessType;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
//import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

/**
 * A Note entity class. A Note is represented as a triple of an id, a name and a content.
 *
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
@Entity(name = "Note")
@Table(name = "NOTE", uniqueConstraints = {@UniqueConstraint(columnNames = {"ID"})})
@Access(AccessType.PROPERTY)
@NamedQuery(name = "getNotes", query = "SELECT n FROM Note n ORDER BY n.id")
public class Note {

    private Long id;

    private String name;

    private String contents;
    
    /**
     * Get note id
     * @return Long
     */
    @Id
    @Column(name = "ID", nullable = false, updatable = false, unique = true)
    // Not using the ID generator because I want to control the ID in order to be able to use the standard Oracle JET Common Model
    // @SequenceGenerator(name = "noteSeq", sequenceName = "NOTES_ID_SEQ", allocationSize = 1, initialValue = 1)
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "noteSeq")
    public Long getId() {
        return id;
    }

    /**
     * Set note id
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Get note name
     * @return String
     */
    @Basic(optional = false)
    @Column(name = "NAME", nullable = false)
    public String getName() {
        return name;
    }

    /**
     * Set note name
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get note contents
     * @return String
     */
    @Column(name = "CONTENTS")
    public String getContents() {
        return contents;
    }

    /**
     * Set note contents
     * @param contents
     */
    public void setContents(String contents) {
        this.contents = contents;
    }

}
