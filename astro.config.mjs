import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Myxogastria0808.github.io",
  base: "/astro-blog-mytemplate",
  integrations: [react()],
});
