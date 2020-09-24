# Front End-challenge

This project consists of two parts

1. UI folder contains angularJs based web interface, there is a detailed readme file within that folder on how to build and execute this UI

2. API - Rest API is written in Spring boot. It has two APIs, 
a. fetchAllUsers to fetch all nominees from database
b. fetchByUserId - to fetch a particular nominee based on its userId

MongoDB is required
application.properties inside api project will have to be updated with mongoDB details. THE DB name that is used in this project is challenge, and it has one collection User.
and the structure of the input document to User collection is 

{
    "_id": {
        "$oid": "5f5df15cb91f1f01106c374d"
    },
    "userId": "100",
    "name": "Jaroslaw",
    "activationstatus": "true",
    "birthdate": "25/04/1990"
}
