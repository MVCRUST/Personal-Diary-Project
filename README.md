# My Personal Diary

# Overview

My Diary is a personal diary web application that allows users to privately record their thoughts, experiences and daily reflections. The application enables users to create, view, search, update and delete diary entries through a simple and elegant interface. With a strong focus on functionality, usability and clear code structure using the Model–View–Controller (MVC) pattern.

This project was developed as part of Hackathon #2

## Features of the Personal Diary 

- Create a diary entry with a title, content and optional date & time
- View all diary entries in a list and a table
- Search diary entries by title or ID
- View full details of a diary entry
- Edit an existing diary entry
- Delete diary entries
- Clean and elegant user interface
- Uses a SQL database for persistent storage

## Technologies Used
Backend:
- Node.js
- Express.js
- PostgreSQL
- SQL
- dotenv
- Supabase

Frontend:
- HTML
- CSS
- JavaScript
- Fetch API

#### How to Use the App

- Open the app in the browser
- Create a new diary entry using the form
- View entries listed below the search section
- Search entries by typing a title or ID
- Edit or delete entries using the table or details view

 #### MVC Architecture

The application follows the Model–View–Controller design pattern:

- Model: Located in server/models/DiaryEntry.js [Responsible for database queries and data logic]

- Controller: Located in server/controllers/diaryEntries.js [Handles request logic and communicates between models and views]

- Router: Located in server/routers/diaryEntries.js [Maps HTTP routes to controller functions]

- View: Built using index.html and style.css [Handles user interaction and displays data]

#### Future Improvements

- User authentication
- Upload images for diary entries
- External API integration





