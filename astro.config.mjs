import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sohosai.github.io",
  base: import.meta.env.PROD ? "/astro-blog-mytemplate" : "/",
  integrations: [react()],
});
