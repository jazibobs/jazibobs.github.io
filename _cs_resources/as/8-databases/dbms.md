---
title: DBMS
level: as
paper: 1
listed: true
topic: Databases
syllabus: 8
layout: cs_single
---

## Key terms

> - DBMS – Database Management System

Not everyone is comfortable working with databases by only writing SQL statements​.

A DBMS is a piece of software designed to help database administrators manage all of the information by providing an easy to use graphical user interface (GUI).

A standard DBMS will include the following key features/functionality:
- Data definition
- Data manipulation
- Data storage
- Data backup/recovery
- Data integrity
- Data access rights
- Data dictionary

## Data definition

The DBMS provides the functionality required to define the structure of the data within our database​.

This includes defining and modifying the structure of tables, deciding the data type for each attribute and validation rules the data must follow.

## Data manipulation

The DBMS manages inserting, modifying and deleting records in the database​.
This can be done via the *developer interface* (or by using SQL statements).​

The DBMS can handle planned, scheduled data manipulation as well as unplanned ad-hoc queries.

## Data storage

The DBMS is will manage the storage requirements of any created database​. Any complexities associated with creating optimized data structures for relational databases is automatically handled​. This process is called data storage management.

## Data backup and recovery
The DBMS allows users to create backups of their databases​. It is possible to automate this process so backups are created daily/weekly/monthly​.

In the event of system failure the DBMS also provides means of restoring data from these backups.

## Data integrity
One of the most important roles of a DBMS is to maintain data integrity​, this refers to maintaining all of the rules and relationships that exist between our records at all times​.

One key strategy to improve data integrity is to ensure that all validation and verification checks are completed each time a new record is inserted into the database.

Data integrity will also include checking for consistency between records linked with primary and foreign keys.

## Data access rights
When multiple users have access to a database, access rights become very important​. DBMSs are able to set access rights on a single-user basis​.

These rights can include what data elements users have access to and what data operations the user can perform.

## Data dictionary
The DBMS maintains a data dictionary​, this is data about the database​ - you can think of this as the database's *metadata*.

A data dictionary may contain:​
- A list of all tables in the database​
- The number of records in each table​
- All field names and their data types
