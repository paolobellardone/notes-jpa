package io.helidon.demo.jpa.exceptions;

public class MalformedNoteException extends Exception {

    private static final long serialVersionUID = -4963871740639334006L;

    public MalformedNoteException() {
    }

    public MalformedNoteException(String message) {
        super(message);
    }

    public MalformedNoteException(Throwable cause) {
        super(cause);
    }

    public MalformedNoteException(String message, Throwable cause) {
        super(message, cause);
    }

}