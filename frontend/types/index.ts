export interface LoginResponse {
  message: string
  user?: {
    id: number
    name: string
    email: string
  }
}

export interface QuestionResponse {
  questions: string
}
