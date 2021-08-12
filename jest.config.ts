module.exports = {
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "<rootDir>/src/**/**/*.ts",
    "!<rootDir>/src/main/**",
    "!**/tests/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: "",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
