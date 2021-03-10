---
title: DDL and DML
level: as
paper: 1
listed: true
topic: Databases
syllabus: 8
layout: cs_single
---

## Key terms

> - DDL – Data Definition Language
> - DML – Data Manipulation Language
> - DBA – Database Administrator
> - DBMS – Database Management System
> - SQL – Structured Query Language

## Working with databases

When working with databases, a DBA (Database Administrator) will usually we working with a language known as SQL (Structured Query Language). 

SQL is the programming language used within a DBMS (Database Management System) to create, edit, delete and query databases.​
It is the industry standard for working with relational databases and can be found within the following DBMS:
- IBM Db2​
- Microsoft SQL Server​
- MySQL Workbench​
- Oracle Database (Oracle DBMS)​
- SQLiteStudio

SQL instructions will perform what is known as data definition or data manipulation. This is where the terms DDL and DML originate.

## Data Definition Language (DDL)

Data Definition Language (DDL) the language we use to create and alter the schema (structure) of the tables within a database​.

DDL does not put any data into the database.

### DDL Examples

The following line of code defines a new database called `ConcertManagementSystem`
```SQL
CREATE DATABASE ConcertManagementSystem;​
```

After creating the database, we are able to declare 2 tables, `Band` and `BandBooking`
```SQL
CREATE TABLE Band (​
  BandName varchar(25),​
  NumberOfMembers number(1),​

  % etc...​
);​
```

```SQL
CREATE TABLE BandBooking (​
  BookingID number(10)​
  BandName varchar(25),​
  BookingDate date,​

  % etc...
);
```

And then declare the primary key and foreign keys for each table...

```SQL
ALTER TABLE Band 
    ADD PRIMARY KEY (BandName);​
```

```SQL
ALTER TABLE BandBooking 
    ADD FOREIGN KEY (BandName REFERENCES Band(BandName));
```

## Data manipulation language (DML)

Data Manipulation Language (DML) is used after the database is created to populate the tables with data.​

Once your tables are full of data, DML can be used to update and maintain data in your database.

### DML Examples

How to insert data into an existing table...
```SQL
INSERT INTO BandBooking (BandName, BookingID) ​
  VALUES ('Radiohead', 2021011201);​
```
​
How to update data in an existing table...
```SQL
UPDATE Band SET NumberOfMembers = 4 ​
  WHERE BandName = 'Radiohead';​
```
​
How to delete data from a table
```SQL
DELETE FROM Band WHERE BandName = 'Radiohead';
```

How to query (find) data in the database
```SQL
SELECT BandName 
    FROM BandBooking
    WHERE Headlining = "Y";
```