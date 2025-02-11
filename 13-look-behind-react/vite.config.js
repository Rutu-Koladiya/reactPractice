import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// million js for optimization

// import MillionLint from "@million/lint";
 
// const nextConfig = {
//   // ...
// };
 
// export default MillionLint.next({ rsc: true })(nextConfig);