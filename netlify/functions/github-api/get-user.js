// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /user', {})