import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import SiteLogo from '../components/site-logo'

export const metadata: Metadata = {
  title: 'Interview Platform',
  description: 'Advanced AI interview preparation dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <SiteLogo />
            <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
              <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
                Home
              </Link>
              <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
                Dashboard
              </Link>
              <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 transition hover:bg-slate-100">
                Login
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
