# User Management API

A simple RESTful API for managing users, built with **Express**, **MongoDB**, and **ES6**. The API allows performing CRUD operations on user data with basic validation for user fields such as name, email, and age. It also includes error handling for validation and database errors.

## Features

- **Create** a new user
- **Read** user data (all users or individual user by ID)
- **Update** user data
- **Delete** user by ID
- Input validation for:
  - Name: Must be a non-empty string
  - Email: Must be a valid and unique email
  - Age: Must be a positive integer
- Error handling for validation and database errors (e.g., duplicate email)

## Prerequisites

Before starting the project, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud database like MongoDB Atlas)
