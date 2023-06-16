/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        'demo-sm': '720px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      colors: ({ colors }) => ({
        primary: {
          "100": "#011f46",
          "200": "#022e59",
          "300": "#043d6c",
          "400": "#064c7f",
          "500": "#095b92",
          "600": "#0e66a2",
          "700": "#1b76b0",
          "800": "#2886c4",
          "900": "#3496d8",
          "950": "#3ea7ec",
        },
        secondary: {
          "100": "#520523",
          "200": "#620c32",
          "300": "#731142",
          "400": "#832051",
          "500": "#932f60",
          "600": "#a33d6f",
          "700": "#b34c7e",
          "800": "#c25b8e",
          "900": "#d16b9d",
          "950": "#e37cac",
        },
        gray: colors.neutral
      }),
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}