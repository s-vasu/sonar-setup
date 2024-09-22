
 const config =  {
  transform: {
    ".+\\.(css|scss|png|jpg|svg|webp|gif)$": "jest-transform-stub",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
};

export default config;



