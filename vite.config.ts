/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: '/axgrid/',
    plugins: [react(), TanStackRouterVite(), tsconfigPaths()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'src/tests/setup.ts'
    }
});
