# Task Management - Technical Test

## Context
This project is a technical test focused on task management. It is specifically designed for a **development environment** and is not intended for production use. The system architecture includes both backend and frontend for convenience and to facilitate the technical test.

The backend is developed with **Django Rest Framework (DRF)**, and the frontend is implemented directly in **JavaScript, HTML, and CSS**, without additional frameworks. Communication between them is done via **REST APIs**.

## Technologies Used
- **Backend:** Django Rest Framework (DRF)
- **Frontend:** JavaScript, HTML, CSS
- **Containers:** Docker, Docker Compose
- **Quality Control:** Pre-commit hooks

## Installation and Execution
### 1. Clone the repository
```bash
git clone <REPOSITORY_URL>
cd task-management
```

### 2. Start the environment with Docker
To start the services, simply run:
```bash
docker compose up --build
```
This will start both the backend and frontend.

### 3. Test the application
Once the containers are running, the backend will be available at:
```
http://localhost:8000/
```
and the frontend can be accessed from:
```
http://localhost:80/
```

## Testing
Tests can be executed directly from the backend container using the following command:
```bash
docker compose exec web python manage.py test
```

## Pre-commit Hooks
The project is configured with **pre-commit** for basic validations. To install it, run:
```bash
pre-commit install
```
This ensures that basic rules are enforced before each commit.