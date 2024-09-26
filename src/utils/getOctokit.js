import { Octokit } from "octokit";
//process.env.VITE_GITHUB_TOKEN
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
//
const octokit = new Octokit({auth: githubToken});

export {octokit};