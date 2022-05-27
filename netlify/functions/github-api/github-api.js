import { Octokit, App } from "octokit";

const handler = async (event) => {
  const octokit = new Octokit({
    auth: 'ravigehlot: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'
  })

  let result = await octokit.request('GET /users/ravigehlot', {})

  return result;
}

module.exports = { handler }
