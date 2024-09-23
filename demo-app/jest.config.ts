module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "!src/**/*.d.ts", // Exclude declaration files
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
};
