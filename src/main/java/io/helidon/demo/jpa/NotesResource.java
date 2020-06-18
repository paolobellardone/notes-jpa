package io.helidon.demo.jpa;

import java.util.List;
import java.util.logging.Logger;

import javax.enterprise.context.Dependent;

import javax.inject.Inject;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import io.helidon.demo.jpa.exceptions.MalformedNoteException;
import io.helidon.demo.jpa.exceptions.NoteExistsException;
import io.helidon.demo.jpa.exceptions.NoteNotExistsException;

@Dependent
@Path("/notes")
public class NotesResource {

    @Inject
    NotesService noteService;

    private static final Logger LOGGER = Logger.getLogger(NotesResource.class.getPackage().getName());

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllNotes() {
        List<Note> results;

        try {
            LOGGER.info("Getting all Notes from the database.");
            results = noteService.getAll();
        } catch(MalformedNoteException e) {
            return Response.status(500).build();
        }

        return Response.ok(results).status(200).build();
    }

    @GET
    @Path("/{itemId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getById(@PathParam("itemId") Long itemId) {
        LOGGER.info("Getting note with id [" + itemId + "] from the database.");
        Note foundNote = noteService.getNoteById(itemId);
        if (foundNote == null) {
            return Response.status(404).build();
        }
        return Response.ok(noteService.getNoteById(itemId)).status(200).build();
    }

    @POST
    @Path("/publish")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response publishNote(Note newNote) {
        if (newNote.getId() != null) {
            LOGGER.severe("Got a non null ID, this note is malformed.");
            return Response.status(500).build();
        }

        Note inserted;

        try {
            LOGGER.info("Publishing new note: " + newNote.getName());
            inserted = noteService.publishNote(newNote);
        } catch (NoteExistsException e) {
            LOGGER.severe("Publish failed for note: " + newNote.getName() + " NOTE EXISTS.");
            return Response.status(500).build();
        } catch (MalformedNoteException e) {
            LOGGER.severe("Publish failed for note: " + newNote.getName());
            return Response.status(500).build();
        }

        return Response.ok(inserted.getId()).status(200).build();
    }

    @PUT
    @Path("/{itemId}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateNote(@PathParam("itemId") Long itemId, Note updatedNote) {
        if ((updatedNote.getContents() == null) || (updatedNote.getName() == null)) {
            LOGGER.severe("Missing updated Name or Contents, this note is malformed.");
            return Response.status(500).build();
        }

        Note updated = noteService.updateNote(itemId, updatedNote);
        LOGGER.info("Updated note: " + updated.getId());

        return Response.ok(updated.getId()).status(200).build();
    }

    @DELETE
    @Path("/{itemId}")
    public Response deleteNote(@PathParam("itemId") Long itemId) {
        try {
            LOGGER.info("Deleting note: " + itemId);
            noteService.deleteNoteById(itemId);
        } catch(MalformedNoteException e) {
            LOGGER.severe("Delete failed for note: " + itemId);
            return Response.status(500).build();
        } catch (NoteNotExistsException e) {
            LOGGER.warning("Delete non-existing note failed for note: " + itemId);
            return Response.status(404).build();
        }

        return Response.ok(itemId).status(200).build();
    }

}