import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Java Learn
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your comprehensive Java learning platform
        </p>
        <div className="space-x-4">
          <Link
            href="/windows"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Windows Section
          </Link>
          <Link
            href="/examples"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            View Examples
          </Link>
        </div>
      </div>
    </div>
  );
}