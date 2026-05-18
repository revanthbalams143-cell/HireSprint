"use client"

import { useState, type ChangeEvent } from 'react'
import { fetchQuestions } from '../../services/api'
import type { QuestionResponse } from '../../types'

export default function Dashboard() {
  const [role, setRole] = useState('Frontend Developer')
  const [company, setCompany] = useState('Google')
  const [count, setCount] = useState(5)
  const [questions, setQuestions] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateQuestions = async () => {
    setLoading(true)
    setError('')
    setQuestions('')

    try {
      const data: QuestionResponse = await fetchQuestions(role, company, count)
      setQuestions(data.questions)
    } catch (err) {
      setError('Unable to generate questions. Please check your backend and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">Generate interview questions instantly</h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Choose a role and company, then create targeted questions for your practice session.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              Backend: <span className="font-medium text-slate-900">http://127.0.0.1:8000</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Role</span>
              <input
                value={role}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRole(event.target.value)}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Frontend Developer"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Company</span>
              <input
                value={company}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setCompany(event.target.value)}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Google"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Amount</span>
              <input
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setCount(Number(event.target.value))}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={generateQuestions}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Generating questions…' : 'Generate questions'}
            </button>
            <p className="text-sm text-slate-500">Tip: customize the prompt for more relevant question suggestions.</p>
          </div>

          {error ? (
            <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
          ) : null}

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Generated Questions</p>
                <p className="text-sm text-slate-500">Your results appear here after generation.</p>
              </div>
              {questions ? (
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(questions)}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Copy all
                </button>
              ) : null}
            </div>
            <textarea
              readOnly
              value={questions}
              rows={12}
              className="w-full resize-none rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-900 focus:outline-none"
              placeholder="Generate a question set to preview them here."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
