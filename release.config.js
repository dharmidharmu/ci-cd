module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/dharmidharmu/ci-cd",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github",{assets: [
            {path:".dist/build.zip", label: "Build"}
        ]}]
      ]
    }