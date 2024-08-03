
// import { defineConfig } from 'vite';

// export default defineConfig({
//   // plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/__test__/setupTests.js',
//   },
// });
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setupTests.jsx',
  },
});