# helidon-jpa

## A Simple CRUD Notes application written in Java and using Helidon Micro-Profile framework

This is a simple note-taking application written in Java using Helidon MP 2.0 as backend framework and AngularJS as UI framework.

It has to be considered no more than a demo or an exercise to demonstrate Helidon capabilities such as REST APIs development, configuration, JPA persistence and so on.

![Screenshot](/docs/images/screenshot.png)

## Pre-requisites

1. Java JDK 11 or later
2. Maven
3. Oracle Database (Cloud or on-premises)

## Build

1. Download or clone the repository to your local enviroment
   > git clone <https://github.com/paolobellardone/helidon-jpa.git>
2. Build the maven project
   > mvn clean package
3. Prepare the database by running the create_datamodel.sql into a database schema
   > sqlplus [username]@[connection_string]
   > @sql/create_datamodel.sql

## Run

To run the built application use the following command:
> java -jar target/helidon-jpa.jar

The application UI is available at <http://localhost:8081>

The REST API endpoint is <http://localhost:8081/notes>, for example you can see all existing notes at <http://localhost:8081/notes/all>

You can configure the listening port and the data source by modifing the application.yaml file.

Please see Helidon documentation at <http://helidon.io> for further details.

## License

MIT License

Copyright (c) 2020 PaoloB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
