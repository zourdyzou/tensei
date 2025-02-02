// commitlint.config.cjs
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "chore", // Maintenance work (e.g., refactoring, dependencies update)
        "docs", // Documentation updates
        "style", // Code styling, formatting changes
        "refactor", // Code refactoring (no feature changes)
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "ci", // CI/CD configuration changes
        "build", // Changes affecting the build system or external dependencies
        "revert", // Reverting changes
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
  },
};
