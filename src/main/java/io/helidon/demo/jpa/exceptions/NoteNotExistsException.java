package io.helidon.demo.jpa.exceptions;

public class NoteNotExistsException extends Exception {

    private static final long serialVersionUID = -2968812072817733049L;

    public NoteNotExistsException() {
    }

    public NoteNotExistsException(String message) {
        super(message);
    }

    public NoteNotExistsException(Throwable cause) {
        super(cause);
    }

    public NoteNotExistsException(String message, Throwable cause) {
        super(message, cause);
    }

}