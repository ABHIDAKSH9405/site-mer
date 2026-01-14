import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-deep': 'var(--color-ocean-deep)',
        'ocean-medium': 'var(--color-ocean-medium)',
        'ocean-light': 'var(--color-ocean-light)',
        'foam': 'var(--color-foam)',
        'sand': 'var(--color-sand)',
        'coral': 'var(--color-coral)',
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
      },
      spacing: {
        'section': 'var(--spacing-section)',
      },
    },
  },
  plugins: [],
};

export default config;
