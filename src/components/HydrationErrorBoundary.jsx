'use client';

import React from 'react';

/**
 * HydrationErrorBoundary - Catches hydration errors and provides fallback UI
 */
class HydrationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log hydration errors for debugging
    if (typeof window !== 'undefined' && error.message.includes('hydration')) {
      console.error('Hydration error caught:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-red-800 font-semibold">Something went wrong</h2>
          <p className="text-red-600 text-sm mt-2">
            A hydration error occurred. Please refresh the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default HydrationErrorBoundary;