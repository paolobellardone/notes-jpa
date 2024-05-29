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

import java.sql.SQLIntegrityConstraintViolationException;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

import org.eclipse.persistence.exceptions.DatabaseException;

import io.helidon.http.Status;

/**
 * An {@link ExceptionMapper} that handles {@link PersistenceException}s.
 *
 * @see ExceptionMapper
 * 
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
@ApplicationScoped
@Provider
public class JPAExceptionMapper implements ExceptionMapper<PersistenceException> {

  /**
   * Creates a new {@link JPAExceptionMapper}.
   */
  public JPAExceptionMapper() {
    super();
  }

  /**
   * Returns an appropriate non-{@code null} {@link Response} for the
   * supplied {@link PersistenceException}.
   *
   * @param persistenceException the {@link PersistenceException} that caused
   *                             this {@link JPAExceptionMapper} to be invoked;
   *                             may be {@code null}
   *
   * @return a non-{@code null} {@link Response} representing the error
   */
  @Override
  public Response toResponse(final PersistenceException persistenceException) {
    final Response returnValue;
    if (persistenceException instanceof NoResultException ||
        persistenceException instanceof EntityNotFoundException) {
      returnValue = Response.status(Status.NOT_FOUND_404.code()).build(); // 404
    } else if (persistenceException instanceof EntityExistsException) {
      returnValue = Response.status(Status.CONFLICT_409.code()).build(); // 409
    } else if (persistenceException.getCause() instanceof DatabaseException) {
      if (persistenceException.getCause().getCause() instanceof SQLIntegrityConstraintViolationException) {
        returnValue = Response.status(Status.CONFLICT_409.code()).build();
      } else if (persistenceException.getCause().getCause() instanceof java.sql.SQLRecoverableException) {
        returnValue = Response.status(Status.SERVICE_UNAVAILABLE_503.code()).build();
      }
      else
        returnValue = Response.status(Status.INTERNAL_SERVER_ERROR_500.code()).build();
    } else {
      //throw persistenceException;
      returnValue = Response.status(Status.INTERNAL_SERVER_ERROR_500.code()).build();
    }
    return returnValue;
  }

}
