'use client';

import { useState, useEffect } from 'react';
import NoSSR from '../../components/NoSSR';

/**
 * Windows Page Component with hydration mismatch fixes
 * This component implements proper client-side rendering guards to prevent hydration mismatches
 */
export default function WindowsPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [clientData, setClientData] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Hydration guard - ensures consistent rendering between server and client
  useEffect(() => {
    setMounted(true);
    setIsHydrated(true);
    
    // Simulate client-specific data that might cause hydration mismatches
    setClientData({
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }, []);

  // Prevent hydration mismatch by not rendering dynamic content until hydrated
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Windows</h1>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen hydration-safe ${isHydrated ? 'hydrated' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Windows</h1>
          <p className="text-xl text-gray-600">
            Welcome to the Windows learning platform
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Static content that renders consistently */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Getting Started
              </h2>
              <p className="text-gray-600 mb-4">
                Learn the basics of Windows development and administration.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Start Learning
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Advanced Topics
              </h2>
              <p className="text-gray-600 mb-4">
                Dive deeper into Windows internals and advanced features.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Explore Advanced
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Best Practices
              </h2>
              <p className="text-gray-600 mb-4">
                Learn industry best practices and coding standards.
              </p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                View Guidelines
              </button>
            </div>
          </div>

          {/* Client-only content wrapped in NoSSR to prevent hydration mismatches */}
          <NoSSR fallback={<div className="mt-8 p-4 bg-gray-100 rounded-lg">Loading client data...</div>}>
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Information</h3>
              {clientData && (
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Timestamp:</strong> {clientData.timestamp}</p>
                  <p><strong>Viewport:</strong> {clientData.viewport.width} x {clientData.viewport.height}</p>
                  <p><strong>User Agent:</strong> {clientData.userAgent}</p>
                </div>
              )}
            </div>
          </NoSSR>

          {/* Interactive component that only renders after hydration */}
          {isHydrated && (
            <InteractiveComponent />
          )}
        </main>
      </div>
    </div>
  );
}

/**
 * Interactive component that requires client-side JavaScript
 * This is separated to prevent hydration mismatches
 */
function InteractiveComponent() {
  const [count, setCount] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    setIsInteractive(true);
  }, []);

  if (!isInteractive) {
    return null;
  }

  return (
    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">Interactive Demo</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-xl font-semibold text-blue-800">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}