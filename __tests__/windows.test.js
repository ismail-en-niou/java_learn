/**
 * Simple test to verify hydration-safe components work properly
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WindowsPage from '../src/app/windows/page'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}))

// Mock window object for client-side only code
Object.defineProperty(window, 'navigator', {
  value: {
    userAgent: 'test-user-agent',
  },
})

describe('WindowsPage', () => {
  it('renders without hydration errors', async () => {
    render(<WindowsPage />)
    
    // Check for main content that should render consistently
    expect(screen.getByText('Windows')).toBeInTheDocument()
    expect(screen.getByText('Welcome to the Windows learning platform')).toBeInTheDocument()
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
    expect(screen.getByText('Advanced Topics')).toBeInTheDocument()
    expect(screen.getByText('Best Practices')).toBeInTheDocument()
  })
  
  it('shows loading state initially', () => {
    render(<WindowsPage />)
    
    // The component should show loading initially to prevent hydration mismatch
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})