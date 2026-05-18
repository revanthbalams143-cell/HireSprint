import type { LoginResponse, QuestionResponse } from '../types'

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000'

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  return response.json()
}

export async function fetchQuestions(role = 'Frontend Developer', company = 'Google', count = 5): Promise<QuestionResponse> {
  const response = await fetch(`${API_BASE}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ role, company, count }),
  })

  if (!response.ok) {
    throw new Error('Unable to generate questions')
  }

  return response.json()
}
