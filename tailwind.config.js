/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./news.html",
    "./winners.html",
    "./voting.html",
    "./faq.html",
    "./404.html",
    "./_team/**/*.{html,md}",
    "./_posts/**/*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_includes/**/*.{html,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

