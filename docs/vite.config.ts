import { defineConfig } from 'vite'
import llmstxt from "vitepress-plugin-llms";

export default defineConfig({
  plugins: [llmstxt()],
  optimizeDeps: {
    exclude: ['vitepress']
  }
})
