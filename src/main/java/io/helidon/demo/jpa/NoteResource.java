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

import java.net.URI;
import java.util.List;
import java.util.logging.Logger;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceException;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.OPTIONS;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import io.helidon.http.Status;
import io.helidon.microprofile.cors.CrossOrigin;

/**
 * This class implements REST endpoints to interact with Notes. The following
 * operations are supported:
 *
 * <ul>
 * <li>GET /notes: Retrieve list of all notes</li>
 * <li>GET /notes/{id}: Retrieve single note by ID</li>
 * <li>POST /notes: Create a new note</li>
 * <li>PUT /notes/{id}: Update a note by ID</li>
 * <li>DELETE /notes/{id}: Delete a note by ID</li>
 * </ul>
 * 
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
@Path("/notes")
public class NoteResource {

    private static final Logger LOGGER = Logger.getLogger(NoteResource.class.getPackage().getName());

    /** Inject the entity manager to interact with the database */
    @PersistenceContext(unitName = "note")
    private EntityManager entityManager;

    /**
     * Get all the notes from the database
     * 
     * @return a List of {@link Note}
     */
    @GET
    @Operation(summary = "Returns all notes",
               description ="This API returns all notes persisted inside the database.")
    @APIResponse(description = "JSON collection of all JSON objects representing the notes persisted in the database.",
                 content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = Note.class)))
    @Produces(MediaType.APPLICATION_JSON)
    public List<Note> getNotes() {
        LOGGER.fine(() -> "Getting all notes from the database.");
        List<Note> notes = entityManager.createNamedQuery("getNotes", Note.class).getResultList(); // returns 200
        if (notes != null) {
            LOGGER.fine("Got all notes.");
            return notes;
        } else {
            LOGGER.severe("Could not read notes from the database.");
            throw new NotFoundException(); // returns 404
        }
    }

    /**
     * Get a {@link Note} from the database
     * 
     * @param id the id of the {@link Note} to get
     * 
     * @return a {@link Note}
     */
    @GET
    @Path("{id}")
    @Operation(summary = "Returns a specific note",
               description ="This API returns fron the database a specific note, identified by its id.")
    @APIResponse(description = "A JSON objects representing the requested note.",
                 content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = Note.class)))
    @Produces(MediaType.APPLICATION_JSON)
    public Note getNoteById(@PathParam("id") Long id) {
        LOGGER.fine(() -> "Getting note with id [" + id + "] from the database.");
        Note note = entityManager.find(Note.class, id);
        if (note != null) {
            LOGGER.fine(() -> "Got note with id [" + id + "] from the database.");
            return note; // returns 200
        } else {
            LOGGER.warning(()-> "Failed getting note with id [" + id + "]: NOTE DOES NOT EXISTS");
            throw new NotFoundException(); // returns 404
        }
    }

    /** 
     * Cteate a new {@link Note} in the database
     *
     * @param note the {@link Note} to be created in the database
     *
     * @return a non-{@code null} {@link Response} representing the error
     */
    @POST
    @Operation(summary = "Persist a new note inside the database.",
               description = "This API persist a new note inside the database using the values specified in the payload.")
    @RequestBody(name = "note",
                 description = "The values representing the content of the new note.",
                 content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = Note.class)))
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional(Transactional.TxType.REQUIRED)
    public Response createNote(Note note) {
        LOGGER.fine("Creating note with id [" + note.getId() + "] in the database.");
        if (note.getName() == null) {
            LOGGER.severe(() -> "Failed creating note with id [" + note.getId() + "]: NOTE IS MALFORMED");
            return Response.status(Status.INTERNAL_SERVER_ERROR_500.code()).build(); // 500
        }
        try {
            entityManager.persist(note);
            entityManager.flush();
        } catch (PersistenceException pe) {
            LOGGER.warning(() -> "Failed creating note with id [" + note.getId() + "]: " + pe.getMessage());
            throw pe; // returns 409
        }
        LOGGER.fine(() -> "Created note with id [" + note.getId() + "] in the database.");
        URI uri = UriBuilder.fromPath("/notes/{id}").build(note.getId());
        return Response.created(uri).entity(note).build();
    }

    /**
     * Update a {@link Note} in the database
     * 
     * @param id the id of the {@link Note} to get
     * 
     * @param note the updated {@link Note}
     * 
     * @return a non-{@code null} {@link Response} representing the error
     */
    @PUT
    @Path("{id}")
    @Operation(summary = "Update a note inside the database.",
               description = "This API updates a note inside the database using the values specified in the payload.")
    @RequestBody(name = "note",
                 description = "The values representing the content of the new note.",
                 content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = Note.class)))
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional(Transactional.TxType.REQUIRED)
    public Response updateNote(@PathParam("id") Long id, Note note) {
        LOGGER.fine(() -> "Updating note with id [" + id + "] in the database.");
        Note updatedNote = getNoteById(id); // returns 404 and throws exception managed by JPAExceptionMapper
        if (note.getName() != null) {
            LOGGER.fine("Updated note with id [" + id + "].");
            updatedNote.setName(note.getName());
            updatedNote.setContents(note.getContents());
            return Response.noContent().build(); // returns 204
        } else {
            LOGGER.severe(() -> "Failed updating note with id [" + id + "]: NOTE IS MALFORMED");
            return Response.status(Status.INTERNAL_SERVER_ERROR_500.code()).build(); // 500
        }
    }

    /**
     * Delete a {@link Note} from the database
     * 
     * @param id the id of the {@link Note} to delete
     */
    @DELETE
    @Path("{id}")
    @Operation(summary = "Delete a note from the database",
               description ="This API deletes a note persisted inside the database.")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional(Transactional.TxType.REQUIRED)
    public void deleteNote(@PathParam("id") Long id) {
        LOGGER.fine(() -> "Deleting note with id [" + id + "] from the database.");
        Note note = getNoteById(id); // returns 404 if not found
        if (note != null) {
            LOGGER.fine(() -> "Deleted note with id [" + id + "].");
            entityManager.remove(note); // returns 204
        } else {
            LOGGER.warning(() -> "Note with id [" + id + "] not found in the database.");
        }
    }

    /**
     * Configure CORS for the APIs
     */
    @OPTIONS
    @CrossOrigin(exposeHeaders = { "*" },
                 allowHeaders = { "*" },
                 allowMethods = { "*" },
                 allowCredentials = true,
                 value = {"*"})
    public void options() {
        /** Set headers if needed */
    }

}
