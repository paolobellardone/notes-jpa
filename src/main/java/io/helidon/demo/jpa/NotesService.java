package io.helidon.demo.jpa;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import io.helidon.demo.jpa.exceptions.NoteExistsException;
import io.helidon.demo.jpa.exceptions.NoteNotExistsException;
import io.helidon.demo.jpa.exceptions.MalformedNoteException;

@ApplicationScoped
public class NotesService {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public Note publishNote(Note newNote) throws NoteExistsException, MalformedNoteException {
        try {
            return createNoteWithData(newNote.getName(), newNote.getContents());
        } catch (NoteExistsException e) {
            throw new NoteExistsException("Called method NotesService.createNoteWithData() threw an exception:" + e.getMessage());
        } catch (MalformedNoteException e) {
            throw new MalformedNoteException("Called method NotesService.createNoteWithData() threw an exception:" + e.getMessage());
        }
    }

    @Transactional
    public Note createNoteWithData(String noteName, String noteContents) throws NoteExistsException, MalformedNoteException {
        try {
            Note newNote = new Note();
            newNote.setName(noteName);
            newNote.setContents(noteContents);
            em.persist(newNote);
            return newNote;
        } catch (EntityExistsException e) {
            throw new NoteExistsException("The note exists on the database. " + e.getMessage());
        } catch(IllegalArgumentException e) {
            throw new MalformedNoteException("NotesService.createNoteWithData(): Illegal argument received. " + e.getMessage());
        }
    }

    @Transactional
    public void deleteNote(Note item) throws MalformedNoteException {
        try {
            em.remove(item);
        } catch(IllegalArgumentException e) {
            throw new MalformedNoteException("NotesService.deleteNote(): Illegal argument received. " + e.getMessage());
        }
    }

    @Transactional
    public Note updateNote(Long id, Note updatedNote) {
        Note persistedNote = getNoteById(id);
        if (persistedNote == null) {
            return null;
        }
        persistedNote.setContents(updatedNote.getContents());
        persistedNote.setName(updatedNote.getName());

        return persistedNote;
    }

    @Transactional
    public void deleteNoteById(Long id) throws NoteNotExistsException, MalformedNoteException {
        Note fetched = getNoteById(id);
        if (fetched != null) {
            try {
                deleteNote(fetched);
            } catch (MalformedNoteException e) {
                throw new MalformedNoteException("Called method NotesService.deleteNote() threw an exception: " + e.getMessage());
            }
        } else {
            throw new NoteNotExistsException("Trying to delete a non-existing note ID. Refusing to do so. ID: " + id);
        }
    }

    public List<Note> getAll() throws MalformedNoteException {
        try {
            return em.createNamedQuery("Notes.AllNotes", Note.class).getResultList();
        } catch (IllegalArgumentException e) {
            throw new MalformedNoteException("NotesService.getAll(): Illegal argument received. " + e.getMessage());
        }
    }

    public Note getNoteById(Long id) {
        Note result = em.find(Note.class, id);
        if (result != null) {
            return result;
        }
        return null;
    }

}