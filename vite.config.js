import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

// اكتب اسم الريبو بدل "your-repo-name"
const repoName = 'ads'

export default defineConfig({
  plugins: [react(), ghPages()],
  base: `/${repoName}/`, // مهم عشان GitHub Pages
})
