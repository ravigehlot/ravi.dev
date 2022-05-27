const handler = async (event) => {
  try {
    await octokit;

    return {
      // Octokit.js
      // https://github.com/octokit/core.js#readme
      octokit: new Octokit({
        auth: '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'
      }).request('GET /user', {})
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
