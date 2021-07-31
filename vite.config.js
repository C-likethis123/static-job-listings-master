import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  base: '<static-job-listings-master>',
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
  ]
})
