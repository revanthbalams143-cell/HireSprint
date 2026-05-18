def generate_questions(role: str, company: str) -> str:
    prompt = f"Generate 5 interview questions for a {role} role at {company}."
    return (
        "1. Tell me about a project where you solved a difficult problem.\n"
        "2. How do you stay current with new tools and frameworks?\n"
        "3. Describe a time when you had to explain a technical concept to a non-technical person.\n"
        "4. What is your process for debugging an issue in production?\n"
        "5. How do you prioritize competing requirements in a team project?"
    )
