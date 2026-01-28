import { GitHubIssue } from "../services/GithubService";

export function buildPrompt(userPrompt: string, issues: GitHubIssue[]) {
  const issueText = issues.map(issue =>
    `Title: ${issue.title}\nBody: ${issue.body}\nCreated: ${issue.created_at}`
  ).join("\n\n");

  return `
User Prompt: ${userPrompt}

Here are the GitHub issues:
${issueText}

Analyze them and provide insights.
`;
}
