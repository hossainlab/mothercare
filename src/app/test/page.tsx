import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Matriseba - Test Page
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          This is a test page to verify the Next.js setup is working correctly.
        </p>
        <div className="text-center">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}