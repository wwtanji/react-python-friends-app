# Flask Friends API - Backend

This README contains the backend of a simple web application for managing a list of friends or contacts. It is built using **Flask**, **Flask-SQLAlchemy**, and **SQLite**. This API supports creating, reading, updating, and deleting friends, and is designed to integrate with a React frontend.

---

## Project Structure

```
backend/
│
├── __pycache__/         # Python bytecode cache
├── instance/            # Flask instance folder (can be used for configs)
├── venv/                # Virtual environment (not committed to repo)
│
├── app.py               # Main Flask app setup and configuration
├── models.py            # SQLAlchemy model definition
├── routes.py            # All API route definitions
├── wsgi.py              # WSGI entry point for deployment
├── requirements.txt     # List of Python dependencies
└── README.md            # Project documentation
```

---

## File Descriptions

### `app.py`
- Initializes the Flask app and configures it to serve the React frontend.
- Sets up the SQLite database via SQLAlchemy.
- Enables CORS to allow requests from `localhost:3000`.
- Ensures the database and its tables are created at startup.
- Includes routes to serve static frontend assets from the `../frontend/dist` directory.

### `models.py`
Defines a single SQLAlchemy model: `Friend`

#### Table: Friend
| Column      | Type        | Required | Description               |
|-------------|-------------|----------|---------------------------|
| id          | Integer     | Yes      | Primary key               |
| name        | String(100) | Yes      | Friend's name             |
| role        | String(50)  | Yes      | Role or relationship      |
| description | Text        | Yes      | Description of the friend |
| gender      | String(10)  | Yes      | Gender (male/female/other)|
| img_url     | String(200) | No       | Avatar image URL          |

Includes a method:
```python
def to_json(self)
```
This converts a model instance to a dictionary format suitable for JSON responses.

---

### `routes.py`
Defines RESTful API routes under `/api/friends`

#### Endpoints:

| Method | URL                          | Description                    |
|--------|------------------------------|--------------------------------|
| GET    | `/api/friends`               | Get all friends                |
| POST   | `/api/friends`               | Create a new friend            |
| PATCH  | `/api/friends/<int:id>`      | Update a friend's info         |
| DELETE | `/api/friends/<int:id>`      | Delete a friend by ID          |

#### Behavior:
- Validates required fields for POST requests.
- Automatically assigns an avatar URL based on the provided gender.
- Handles errors with proper status codes and messages.

---

### `wsgi.py`
This file is used for running the app in a production WSGI server (like Gunicorn or uWSGI).

```python
from app import app

if __name__ == "__main__":
    app.run()
```

---

### `requirements.txt`
Contains the full list of Python packages needed for the project.

```
blinker
click
colorama
Flask
Flask-Cors
Flask-SQLAlchemy
greenlet
gunicorn
itsdangerous
Jinja2
MarkupSafe
packaging
setuptools
SQLAlchemy
typing_extensions
Werkzeug
wheel
```

---

## Getting Started (For Beginners)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/flask-friends-api.git
cd flask-friends-api/backend
```

### 2. Set Up a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Backend
```bash
python app.py
```

The server will start at: `http://127.0.0.1:5000`

Make sure your React frontend is running at `http://localhost:3000` so it can connect.

---

## Notes

- The database file `friends.db` will be created automatically on first run.
- You can view API responses using tools like Postman or a browser.
- CORS is enabled only for `http://localhost:3000` by default.
- Each friend entry will be automatically assigned a profile avatar using a third-party API based on their name and gender.

---
