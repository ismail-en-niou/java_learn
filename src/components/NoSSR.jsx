'use client';

import { useEffect, useState } from 'react';

/**
 * NoSSR Component - Prevents server-side rendering for client-only components
 * This helps prevent hydration mismatches by ensuring components only render on the client
 */
export default function NoSSR({ children, fallback = null }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
}