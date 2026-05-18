from fastapi import APIRouter
from database.db import SessionLocal
from models.user import User

router = APIRouter()

@router.post("/signup")
def signup(user: dict):
    db = SessionLocal()

    new_user = User(
        name=user["name"],
        email=user["email"],
        password=user["password"]
    )

    db.add(new_user)
    db.commit()
    db.close()

    return {
        "message": "User created"
    }

@router.post("/login")
def login(credentials: dict):
    db = SessionLocal()
    user = db.query(User).filter(User.email == credentials.get("email")).first()
    db.close()

    if not user or user.password != credentials.get("password"):
        return {"message": "Invalid credentials"}

    return {
        "message": "Login successful",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
        },
    }
