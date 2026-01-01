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

import tailwindPlugin from 'tailwindcss/plugin';

// const pseudo = require('tailwindcss-pseudo-elements');

// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}', // adjust if needed
//   ],
//   theme: {
//     extend: {
//       content: {
//         empty: '""', // for content-empty
//       },
//     },
//   },
//   plugins: [
//     pseudo(), // 👈 correctly invoke the plugin
//     // ... any other plugins
//   ],
// }

/** @type {import('tailwindcss').Config} */
import pseudo from 'tailwindcss-pseudo-elements';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      content: {
        empty: '""',
      },
    },
  },
  plugins: [
    pseudo(),
  ],
};

