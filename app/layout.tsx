import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'JSL Plumbing Services Ltd', description: 'Glasgow\'s trusted plumber since 2006 - fast, reliable, and fully recommended' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
