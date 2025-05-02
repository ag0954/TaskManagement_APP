# Task Management Application

This is a Task Management Web application that allows the user to manage their daily, weekly, and monthly tasks for their convenience. 

The current build of the project supports task creation, deletion, and categorization. You must sign in order to use this application. 

## Authors

- Abraham Gutierrez
- Oluwatosin Omiteru
- Simran Mogadala
- Due Date: 5/4/2025

### Installing

1. Clone the repository

```zsh
git clone 
```

2. Install dependencies for Server

```zsh
cd backend
npm install
```

3. Start the server

```zsh
npm start
```

4. Install dependencies for Frontend

```zsh
cd frontend
npm start
```


The server will start on `localhost:8000`.

## API Endpoints

### User Authentication

- `POST /signup`: Create a new user account
- `POST /signin`: Sign in a with an existing user

### Tasks

- `POST /`: Create a task
- `GET /movies`: Fetch all the task for the user
- `GET /status/:status`: Get all tasks based on status(incomplete,inprogress,complete)
- `GET /:id`: Get a single task
- `PUT /:id`: Update a task.
- `Delete /id`: Delete a Task

# Web Application

TBC
