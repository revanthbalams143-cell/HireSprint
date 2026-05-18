from fastapi import APIRouter
from services.ai_service import generate_questions

router = APIRouter()

@router.post("/generate")
def generate(data: dict):
    questions = generate_questions(
        data.get("role", "Frontend Developer"),
        data.get("company", "Google")
    )

    return {
        "questions": questions
    }
