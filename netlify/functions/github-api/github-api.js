import("https://cdn.skypack.dev/octokit").then(
  handler = async (event) => {
    const octokit = new Octokit({
      auth: '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'
    })

    let result = await octokit.request('GET /user', {})

    return result;
  }
);

module.exports = { handler }