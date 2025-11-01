import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Large 404 */}
        <h1 className="text-9xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>

        {/* Error message */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Amethyst decoration */}
        <div className="mb-8">
          <svg
            className="w-32 h-32 mx-auto text-purple-600 dark:text-purple-400 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.45 3.73L12 11.63 4.55 7.91 12 4.18zM4 9.5l7 3.5v6.82L4 16.32V9.5zm16 6.82l-7 3.5v-6.82l7-3.5v6.82z"/>
          </svg>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-lg font-medium"
          >
            Go Back
          </button>
        </div>

        {/* Suggested links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline"
            >
              Catalogue
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              to="/piezas-grandes"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline"
            >
              Piezas Grandes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
