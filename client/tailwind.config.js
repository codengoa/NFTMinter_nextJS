module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'skranji': ['Skranji', 'serif'],
        'londrina': ['Londrina Outline', 'sans'],
        'shadows': ['Shadows Into Light', 'cursive'],
        'candal': ['Candal', 'sans-serif'],
        'anek' : ['Anek Odia', 'sans-serif']
        
      },
    },
  },
  plugins: [
    require("daisyui")
  ],

}