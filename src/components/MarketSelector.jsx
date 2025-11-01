import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../data/translations'

export default function MarketSelector({ market, onMarketChange }) {
  const { language } = useLanguage()

  return (
    <div className="border-b border-brand-green-100 dark:border-brand-green-900/40 bg-white/70 dark:bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex gap-8 -mb-px">
          <button
            onClick={() => onMarketChange('retail')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              market === 'retail'
                ? 'border-brand-green-500 text-brand-green-600 dark:text-brand-green-200'
                : 'border-transparent text-gray-500 hover:text-brand-green-500 dark:text-gray-400 dark:hover:text-brand-green-200'
            }`}
          >
            {t('retailMarket', language)}
            <span className="ml-2 text-xs opacity-60">(E, A, B)</span>
          </button>
          
          <button
            onClick={() => onMarketChange('wholesale')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              market === 'wholesale'
                ? 'border-brand-purple-500 text-brand-purple-600 dark:text-brand-purple-200'
                : 'border-transparent text-gray-500 hover:text-brand-purple-500 dark:text-gray-400 dark:hover:text-brand-purple-200'
            }`}
          >
            {t('wholesaleMarket', language)}
            <span className="ml-2 text-xs opacity-60">(C, D)</span>
          </button>
        </div>
      </div>
    </div>
  )
}


