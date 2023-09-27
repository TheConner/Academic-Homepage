module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        // => @media  print { ... }
      }
    }
  }
}