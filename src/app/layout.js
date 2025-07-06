import './globals.css';
import HydrationErrorBoundary from '../components/HydrationErrorBoundary';

export const metadata = {
  title: 'Java Learn',
  description: 'Java learning platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="__variable_5cfdac __variable_9a8899 antialiased">
        <HydrationErrorBoundary>
          {children}
        </HydrationErrorBoundary>
      </body>
    </html>
  );
}