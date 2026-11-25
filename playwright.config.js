import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  workers: 1,
  use: {
    baseURL: 'https://products-store.hexlet.app/',
    navigationTimeout: 60000,
    browserName: 'chromium',
    locale: 'en-US',
  },
});

