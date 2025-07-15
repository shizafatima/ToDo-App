/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const tailwindPlugin = require('tailwindcss/plugin');
const pseudo = require('tailwindcss-pseudo-elements');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust if needed
  ],
  theme: {
    extend: {
      content: {
        empty: '""', // for content-empty
      },
    },
  },
  plugins: [
    pseudo(), // 👈 correctly invoke the plugin
    // ... any other plugins
  ],
}


