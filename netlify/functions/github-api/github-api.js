const { Octokit } = require("octokit");
require('dotenv').config()

module.exports = { handler }
const handler = async (event) => {
  try {
    const octokit = new Octokit({
      auth: process.env.MONGODB_ATLAS
    });

    let result = await octokit.request('GET /user', {});

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
