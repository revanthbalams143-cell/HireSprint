from fastapi import FastAPI
from database.db import Base, engine
from routes.auth import router as auth_router
from routes.interview import router as interview_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router)
app.include_router(interview_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }
