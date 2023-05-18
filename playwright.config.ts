import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
 // testMatch: ["tests/signup.test.ts"],
  //timeout: 5 * 60 * 1000,
  use: {
    baseURL: "https://magento.softwaretestingboard.com/",
    headless: false,
    viewport: { width: 1320, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo: 3000,
    },
  },
  retries: 0,
  reporter: [
    ["list"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
});
