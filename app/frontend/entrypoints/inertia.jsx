import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob("../pages/**/*.tsx", { eager: true });
    let page = pages[`../pages/${name}.tsx`];
    return page;
  },
  setup({ el, App, props }) {
    const container = document.getElementById(el.id);
    const root = createRoot(container);
    root.render(<App {...props} />);
  },
});

