package io.helidon.demo.jpa;

import java.util.Random;
import java.util.UUID;

import javax.enterprise.inject.se.SeContainer;
import javax.enterprise.inject.spi.CDI;

import io.helidon.microprofile.server.Server;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;


public class NotesResourceTest {

    private static Server server;

    private String getConnectionString(String path) {
        return "http://localhost:" + server.port() + path;
    }

    @BeforeAll
    public static void startTheServer() throws Exception {
        server = Server.create().start();
    }

    @Test
    void testNotesGetAllEndpoint() {
        /** Test to search for all notes */
        given().
            when().
                get(getConnectionString("/notes/all")).
            then().
                statusCode(200).
                body(equalTo("[{\"id\":999,\"name\":\"test note 1\",\"contents\":\"i am some content\"},{\"id\":1000,\"name\":\"test note 2\",\"contents\":\"yup, contents galore\"},{\"id\":1001,\"name\":\"test note 3\",\"contents\":\"hey look here!\"},{\"id\":1002,\"name\":\"test note 4\",\"contents\":\"buy some books plz\"}]"));
    }

    @Test
    public void testNotesGetByIdEndpoint() {
        /** Test to search for a specific note by Id */
        Long noteId = Long.valueOf(1002);
        given().
            pathParam("itemId", noteId).
            when().
                get(getConnectionString("/notes/{itemId}")).
            then().
                statusCode(200)
                .body(containsString("buy some books plz"));
    }

    @Test
    public void testNotesGetANonExistingNote() {
        /** Test to search for a non existing note using a random Id */
        Random rnd = new Random();
        Long noteId = rnd.nextLong();

        given().
            pathParam("itemId", noteId).
            when().
                get(getConnectionString("/notes/{itemId}")).
            then().
                statusCode(404);
    }

    @Test
    public void testNotesPublishEndpoint() {
        /** Test to publish a new note using random data and then delete it */
        String newName = UUID.randomUUID().toString();
        String newContents = UUID.randomUUID().toString();

        // Create the note...
        String requestBody = "{\"name\": \"NAME_HOLDER\", \"contents\": \"CONTENT_HOLDER\"}";
        Response result = given().
                                when().
                                    body(requestBody.
                                        replace("NAME_HOLDER", newName).
                                        replace("CONTENT_HOLDER", newContents)
                                    ).
                                    contentType("application/json").
                                    post(getConnectionString("/notes/publish")).
                                    then().
                                        statusCode(200).
                                        extract().
                                        response();

        // ... check that the note is successfully created...
        given().
            when().
                pathParam("itemId", result.getBody().asString()).
                get(getConnectionString("/notes/{itemId}")).
            then().statusCode(200).
                body(
                    containsString(newContents),
                    containsString(newName)
                );

        // ... then remove the note
        given().
            pathParam("itemId", result.getBody().asString()).
            when().
                delete(getConnectionString("/notes/{itemId}")).
            then().
                statusCode(200);

    }

    @Test
    public void testNotesUpdateEndpoint() {
        /** Test to publish a new note and update it using random data and then delete it */

        String newName = UUID.randomUUID().toString();
        String newContents = UUID.randomUUID().toString();

        // Create the note...
        String requestBody = "{\"name\": \"NAME_HOLDER\", \"contents\": \"CONTENT_HOLDER\"}";
        Response result = given().
                                when().
                                body(requestBody.
                                        replace("NAME_HOLDER", newName).
                                        replace("CONTENT_HOLDER", newContents)
                                ).
                                contentType("application/json").
                                post(getConnectionString("/notes/publish")).
                                then().
                                    statusCode(200).
                                    extract().
                                    response();

        String updatedContent = UUID.randomUUID().toString();
        String updatedName = UUID.randomUUID().toString();

        // ... then update the note...
        given().
            pathParam("itemId", result.getBody().asString()).
            when().
                body(requestBody.
                        replace("NAME_HOLDER", updatedName).
                        replace("CONTENT_HOLDER", updatedContent)
                ).
                contentType("application/json").
                put(getConnectionString("/notes/{itemId}")).
                then().
                    statusCode(200);

        // ... check for the updated values are successfully written...
        given().
            pathParam("itemId", result.getBody().asString()).
            when().
                get(getConnectionString("/notes/{itemId}")).
            then().
                statusCode(200).
                body(
                    containsString(updatedContent),
                    containsString(updatedName)
                );

        // ... check by getting all notes...
        given()
            .when().get(getConnectionString("/notes/all"))
            .then().statusCode(200)
            .body(
                not(containsString(newName)),
                not(containsString(newContents))
            );

        // ... then finally remove the note
        given()
            .pathParam("itemId", result.getBody().asString())
            .when().delete(getConnectionString("/notes/{itemId}"))
            .then()
                .statusCode(200);
    }

    @Test
    public void testNotesDeleteANonExistingNote() {
        /** Test to delete a non existing note using a random Id */
        Random rnd = new Random();
        Long noteId = rnd.nextLong();

        given().
            pathParam("itemId", noteId).
            when().
                delete(getConnectionString("/notes/{itemId}")).
            then().
                statusCode(404);
    }

    @AfterAll
    static void destroyClass() {
        CDI<Object> current = CDI.current();
        ((SeContainer) current).close();
    }

}