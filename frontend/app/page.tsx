import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              AI-powered practice
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Practice for interviews with smart question generation and polished UI.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Build confidence with a modern interview prep platform that connects to your backend, generates tailored questions, and keeps your practice workflow clean.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Start practicing
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Sign in
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <div className="space-y-5">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Live preview</p>
                <h2 className="mt-4 text-2xl font-semibold">Interview questions on demand</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Generate questions for any role and company, then review them in an interactive dashboard.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold text-slate-900">Tailored prompts</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Pick a role, company and customize your prep.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold text-slate-900">Clean interface</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Navigate the app with ease and focus on practicing.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold text-slate-900">Real backend</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Connects to your FastAPI server for login and AI generation.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold text-slate-900">Responsive design</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Looks great on desktop, tablet, and mobile devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
