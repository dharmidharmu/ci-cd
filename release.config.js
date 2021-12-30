module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/dharmidharmu/",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github",{assets: [
            {path:".dist/build.zip", label: "Build"}
        ]}]
      
      ]
    }