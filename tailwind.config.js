/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Backgrounds
        'bg-primary': '#030303',
        'bg-secondary': '#050505',
        'bg-elevated': '#0B0B0B',
        'bg-surface': '#101010',
        'bg-card': '#151515',
        'bg-glass': 'rgba(255, 255, 255, 0.04)',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8B8B8',
        'text-muted': '#7D7D7D',
        
        // Premium Accents
        'accent': '#EAEAEA',
        'accent-amber': '#D9D9D9',
        'accent-coral': '#F2F2F2',
        'accent-white': '#EAEAEA',
        'accent-light': '#D9D9D9',
        'accent-glow': 'rgba(255, 255, 255, 0.12)',
        'accent-ice': 'rgba(180, 210, 255, 0.12)',
        
        // Borders
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-medium': 'rgba(255, 255, 255, 0.12)',
        
        // Legacy (for gradual migration)
        primary: '#FAFAFA',
        secondary: '#F5F5F5',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
