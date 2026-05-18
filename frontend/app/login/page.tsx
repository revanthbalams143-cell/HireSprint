"use client"

import { useState, type ChangeEvent } from 'react'
import { loginUser } from '../../services/api'
import type { LoginResponse } from '../../types'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      setStatus('error')
      setMessage('Please enter both email and password.')
      return
    }

    setLoading(true)
    setStatus('idle')
    setMessage('')

    try {
      const data: LoginResponse = await loginUser(email, password)
      if (data.message === 'Login successful') {
        setStatus('success')
        setMessage(`Welcome back, ${data.user?.name ?? 'user'}!`)
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Unable to connect to the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10">
      <div className="mx-auto max-w-md space-y-6 rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Login</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Access your interview dashboard</h1>
          <p className="mt-3 text-slate-600">
            Sign in to get custom question generation and save your practice flow.
          </p>
        </div>

        <div className="space-y-4">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
            />
          </label>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </div>

        {status !== 'idle' ? (
          <div
            className={`rounded-3xl border px-4 py-3 text-sm ${
              status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'
            }`}
          >
            {message}
          </div>
        ) : null}
      </div>
    </div>
  )
}
