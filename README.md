# Test Web App - Samuel Romero A.
This project is a full-stack web application developed as a technical test for Web App Developers. It includes a Django-based API as the backend (`problems_api`) and a React-based frontend (`problems-frontend`). The goal is to solve two specific problems (Chess Queen attack and String Value) by creating an interface that interacts with a backend API.

## Project Structure
```bash
test-webapp/ 
├── problems_api/ # Backend (Django API) 
│ ├── manage.py 
│ ├── requirements.txt # Python dependencies 
│ └── problems/ # Main Django application 
├── problems-frontend/ # Frontend (React) 
│ ├── package.json # Node dependencies 
│ └── src/ # React components and pages 
├── .gitignore 
└── README.md # This file
```

## Prerequisites

Make sure you have the following installed on your system:

- **Python 3.x** (preferably 3.8 or later)
- **Node.js** (preferably v16 or later) and npm
- **Virtualenv** for Python
- **Git**

## Backend Setup (Django API)

### Step 1: Create a Python Virtual Environment

Navigate to the `problems_api` folder:

```bash
cd problems_api
```
Create a virtual environment:
```bash
pip install virtualenv
virtualenv venv
```

- On Linux/macOS:
  ```bash
  source venv/bin/activate
  ```
- On Windows:
  ```bash
  .\venv\Scripts\activate
   ```
### Step 2: Install Dependencies
Once the virtual environment is active, install the necessary dependencies using `requirements.txt`:
```bash
pip install -r requirements.txt
```
### Step 3: Run Django Migrations
Apply the migrations to set up the structure:
```bash
python manage.py migrate
```
### Step 4: Run the Backend Server
To start the Django development server, run:
```bash
python manage.py runserver
```
The Django API will be available at `http://localhost:8000`.

## Frontend Setup (React)
### Step 1: Install Node.js Dependencies
Navigate to the `problems-frontend` folder:
### Step 2: Run the Frontend Development Server
Start the React development server:
```bash
npm install
```
```bash
npm start
```
The React application will be available at `http://localhost:3000` and will communicate with the Django backend via API.

# Additional configuration (if necessary)
## CORS Configuration
To allow communication between the frontend (React) and the backend (Django API), CORS is enabled in the Django project.

Ensure that in `settings.py` of your Django project (`problems_api/problems/`), you have configured the allowed origins as follows:

```python
# settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
```
This allows requests from the React development server to access the Django API.

## API Endpoints
The following endpoints are available for each problem:

### 1. Chess Queen Attack Calculation:

- Endpoint: `/api/problem-1/`
- Method: POST
- Request Payload:
  ```json
  {
    "n": 4,
    "k": 0,
    "rq": 4,
    "cq": 4,
    "obstacles": []
  }
  ```
### 2. String Value Calculation:

- Endpoint: `/api/problem-2/`
- Method: POST
- Request Payload:
  ```json
  {
    "string": "abcabcddd"
  }
  ```

  ### Samuel Romero A. | romerotitosamuel@gmail.com | (+591) 76667818
