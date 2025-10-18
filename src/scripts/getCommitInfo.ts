import 'dotenv/config'
import { Octokit } from 'octokit'


const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
  userAgent: 'invisyarcticfox/websitev2/getCommitInfo',
  timeZone: 'Europe/London'
})

export async function getCommitInfo():Promise<{sha:string, url:string}> {
  const { data: res } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'invisyarcticfox',
    repo: 'website-v2',
    headers: { 'X-GitHub-Api-Version': '2022-11-28' }
  })

  return {
    sha: res[0].sha.slice(0,7),
    url: res[0].html_url
  }
}