import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Определяем, где мы запущены
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

// Если GitHub Pages — укажем base с названием репозитория
// Если Vercel или локально — base = '/'
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/My-portfolio/' : '/',
})
