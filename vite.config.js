/*import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Ensure you pass the mode as the first parameter
  return {
    define: {
      'process.env.FRONT': JSON.stringify(env.FRONT),
      'process.env.BACK': JSON.stringify(env.BACK),
      'process.env.TOKEN': JSON.stringify(env.TOKEN)
    },
    plugins: [react()]
  };
});*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
