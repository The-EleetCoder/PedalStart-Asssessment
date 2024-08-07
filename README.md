# Task Management Application

## Live Demo Link
https://pedal-start-asssessment.vercel.app/

## Description
A simple Task Management Application to create, read, update, and delete tasks.

## Installation

### Backend

1. Navigate to the `server` directory.
2. Install dependencies:
    ```
    npm i
    ```
3. Start the development server
    ```
    npm start
    ```
## Environment Variables
Create a `.env` file in the server directory with the following content:
```
MONGODB_URI = mongodb://127.0.0.1:27017/task-manager
PORT = 300
```

### Front-end
1. Navigate to the `client` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server
    ```
    npm start
    ```
## Environment Variables
Create a `.env` file in the server directory with the following content:
```
REACT_APP_BASE_URL = "http://localhost:3000"
```

## Usage
Open the browser and go to `http://localhost:3000`.  
You can add, edit, view, and delete tasks.