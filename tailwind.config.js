/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "3xl": "calc(var(--radius) - 2px)",
        "2xl": "calc(var(--radius) * 2px)",
        xl: "calc(var(--radius) + 12px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-2))",
          tertiary: "hsl(var(--background-3))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-2))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          secondary: "hsl(var(--card-2))",
          foreground2: "hsl(var(--card-2-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
      },
      fontFamily: {
        sans: ["var(--font-family-tertiary)"], // Miniver as the tertiary font
        serif: ["var(--font-family-primary)"], // Bricolage Grotesque as the primary serif font
        display: ["var(--font-family-secondary)"], // Miniver for display
      },
	  letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        ultraWide: '0.15em', // Custom ultra-wide spacing
      },
      lineHeight: {
        // Custom line heights based on your design specifications
        tight: '1.1',
        relaxed: '1.4',
        loose: '1.75',
        ultraLoose: '2.0', // Ultra loose for large headers or display text
        extraTight: '1',   // For compact blocks or titles
        standard: '1.5',   // General body text line-height
      },
      screens: {
        // Custom breakpoints based on common screen sizes
        'xsm': '500px',
        sm: '640px',  // Small devices (portrait tablets and large phones)
        md: '768px',  // Medium devices (landscape tablets)
        lg: '1024px', // Large devices (laptops/desktops)
        xl: '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // 2X large devices (larger screens)
      },
	  spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
