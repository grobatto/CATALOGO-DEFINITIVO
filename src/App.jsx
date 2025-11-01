import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

// Lazy load pages for better performance
const CataloguePage = lazy(() => import('./pages/CataloguePage'))
const PiezasGrandesPage = lazy(() => import('./pages/PiezasGrandesPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-950 dark:border-white"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 min-h-screen transition-colors relative">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<CataloguePage />} />
            <Route path="/piezas-grandes" element={<PiezasGrandesPage />} />
            <Route path="/catalogue/:productId" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
