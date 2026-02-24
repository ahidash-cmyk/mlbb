import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    // @ts-expect-error vite types mismatch (multiple instances or tailwind plugin)
    tailwindcss(),
    // أي plugins تانية
  ],
});
