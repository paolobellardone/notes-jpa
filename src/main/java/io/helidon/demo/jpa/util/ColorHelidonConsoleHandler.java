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

package io.helidon.demo.jpa.util;

import java.util.logging.Level;
import java.util.logging.LogRecord;

import io.helidon.logging.jul.HelidonConsoleHandler;

/**
 * This class implements a log handler to print colourful messages on the console.
 * It is used mainly for testing.
 * 
 * @version 1.3 21 May 2024
 * @author PaoloB
 */
public class ColorHelidonConsoleHandler extends HelidonConsoleHandler {

    private static final String COLOR_RESET   = "\u001b[0m";

    private static final String COLOR_SEVERE  = "\u001b[91m";
    private static final String COLOR_WARNING = "\u001b[93m";
    private static final String COLOR_INFO    = "\u001b[32m";
    private static final String COLOR_CONFIG  = "\u001b[94m";
    private static final String COLOR_FINE    = "\u001b[36m";
    private static final String COLOR_FINER   = "\u001b[35m";
    private static final String COLOR_FINEST  = "\u001b[90m";

    
    /** 
     * Colorize log records based on the log level.
     * @param logRecord
     */
    @Override
    public void publish(LogRecord logRecord) {
        String msg = logRecord.getMessage();

        String prefix;
        Level level = logRecord.getLevel();
        if (level == Level.SEVERE)
            prefix = COLOR_SEVERE;
        else if (level == Level.WARNING)
            prefix = COLOR_WARNING;
        else if (level == Level.INFO)
            prefix = COLOR_INFO;
        else if (level == Level.CONFIG)
            prefix = COLOR_CONFIG;
        else if (level == Level.FINE)
            prefix = COLOR_FINE;
        else if (level == Level.FINER)
            prefix = COLOR_FINER;
        else if (level == Level.FINEST)
            prefix = COLOR_FINEST;
        else
            // Unknown level, probably not possible, but if it happens it means it's bad :-)
            prefix = COLOR_SEVERE;

        logRecord.setMessage(prefix + msg + COLOR_RESET);

        super.publish(logRecord);
        flush();
    }

}
