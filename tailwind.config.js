import generated from "@headlessui/tailwindcss";
import { colors } from "@switchdreams/ui";
import switchUiPlugin from "@switchdreams/ui/dist/tailwind.plugin";


module.exports = {
  content: ["app/**/*.html.erb", "app/**/*.jsx", "./node_modules/@switchdreams/ui/dist/**/*.js"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        default: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [generated({ prefix: "ui" }), switchUiPlugin],
};