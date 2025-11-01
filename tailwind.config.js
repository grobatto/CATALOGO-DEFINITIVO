export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Barrios Amethysts Brand Colors (Official 2023)
        'brand-green': {
          DEFAULT: '#20503B',
          50: '#E8F2ED',
          100: '#D1E5DB',
          200: '#A3CBB7',
          300: '#75B193',
          400: '#47976F',
          500: '#20503B',
          600: '#1A4030',
          700: '#133024',
          800: '#0D2018',
          900: '#07100C',
        },
        'brand-purple': {
          DEFAULT: '#7C4988',
          50: '#F5EDF7',
          100: '#EBDBEF',
          200: '#D7B7DF',
          300: '#C393CF',
          400: '#AF6FBF',
          500: '#7C4988',
          600: '#633A6D',
          700: '#4A2C52',
          800: '#321D37',
          900: '#190F1B',
        },
        // Amethyst alias for backward compatibility
        'amethyst': {
          50: '#F5EDF7',
          100: '#EBDBEF',
          200: '#D7B7DF',
          300: '#C393CF',
          400: '#AF6FBF',
          500: '#7C4988',
          600: '#633A6D',
          700: '#4A2C52',
        },
        'savannah': {
          DEFAULT: '#B79E6A',
          50: '#FAF8F3',
          100: '#F5F1E7',
          200: '#EBE3CF',
          300: '#E1D5B7',
          400: '#D7C79F',
          500: '#B79E6A',
          600: '#927E55',
          700: '#6E5F40',
          800: '#493F2B',
          900: '#252016',
        },
        // Neutral palette based on brand white
        'gray': {
          950: '#000000',
          900: '#1A1A1A',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
          50: '#F7F5F5',
        },
        'hairline-light': '#CCCCCC',
        'hairline-dark': '#333333',
        'beige': '#F5F1E8',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Inter', 'serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'eyebrow': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      letterSpacing: {
        'apple-tight': '-0.03em',
        'apple-normal': '-0.02em',
        'apple-loose': '-0.01em',
      },
      spacing: {
        // 8pt grid system
        '4': '0.25rem',   // 4px
        '8': '0.5rem',    // 8px
        '12': '0.75rem',  // 12px
        '16': '1rem',     // 16px
        '24': '1.5rem',   // 24px
        '32': '2rem',     // 32px
        '48': '3rem',     // 48px
        '64': '4rem',     // 64px
        '96': '6rem',     // 96px
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      borderWidth: {
        'hairline': '1px',
      },
      boxShadow: {
        'none': 'none',
        'hairline': '0 0 0 1px rgba(0, 0, 0, 0.04)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        'apple': '150ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        'apple': '1440px',
      },
    },
  },
  plugins: [],
}
