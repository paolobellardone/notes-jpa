package io.helidon.demo.jpa.exceptions;

public class NoteExistsException extends Exception {

    private static final long serialVersionUID = -6211899990639763472L;

    public NoteExistsException() {
    }

    public NoteExistsException(String message) {
        super(message);
    }

    public NoteExistsException(Throwable cause) {
        super(cause);
    }

    public NoteExistsException(String message, Throwable cause) {
        super(message, cause);
    }

}