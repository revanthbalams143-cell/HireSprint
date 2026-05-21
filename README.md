# HireSprint

## Frontend

- `frontend/` contains the Next.js app with TypeScript and Tailwind.
- Run from `frontend/`:
  - `npm install`
  - `npm run dev`

## Backend

- `backend/` contains a FastAPI backend using SQLite for an easy local start.
- Run from `backend/`:
  - `python -m venv venv`
  - `venv\Scripts\activate`
  - `pip install -r requirements.txt`
  - `uvicorn main:app --reload`

## Notes

- The backend exposes `/signup`, `/login`, and `/generate`.
- The frontend includes a landing page, login page, and dashboard page.
\n\n*PR: create compare pull request*
