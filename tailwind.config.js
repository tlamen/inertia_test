// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//    "app/**/*.html.erb",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { colors } from '@switchdreams/ui'
import switchUiPlugin from '@switchdreams/ui/dist/tailwind.config'

module.exports = {
  content: [
    './node_modules/@switchdreams/ui/dist/**/*.js',
    //...
  ],
  theme: {
    extend: {
      curvature: {
        md: 0, // Configura a curvatura dos componentes
        full: 0,
      },
      colors: colors, // Cores de 0 25 to 950 (altere as cores primaria e secundárias para os projetos)
      fontFamily: {
        default: ['Poppins', 'sans-serif'], //.. Opcional
      },
    },
  },
  plugins: [
    switchUiPlugin(),
  ],

}