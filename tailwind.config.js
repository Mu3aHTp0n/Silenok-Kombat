/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.tsx",
      './app/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

